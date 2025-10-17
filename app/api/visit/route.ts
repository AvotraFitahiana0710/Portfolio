import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import crypto from "node:crypto";

const NOTIFY_TO = process.env.NOTIFY_EMAIL_TO || "avotrafitahianar@gmail.com";
const NOTIFY_FROM = process.env.NOTIFY_EMAIL_FROM || "Portfolio <no-reply@example.com>";

export async function POST(req: NextRequest) {
  try {
    const redis = Redis.fromEnv();

    // Privacy-friendly fingerprint (IP + UA, hashed)
    const ipHeader = req.headers.get("x-forwarded-for");
    const ip = (ipHeader?.split(",")[0] || "0.0.0.0").trim();
    const ua = req.headers.get("user-agent") || "unknown";
    const referer = req.headers.get("referer") || "";

    const id = crypto.createHash("sha256").update(`${ip}|${ua}`).digest("hex");

    // Deduplicate per visitor for 24h
    const uniqueKey = `visit:uniq:${id}`;
    const uniqSet = await redis.set(uniqueKey, "1", { nx: true, ex: 60 * 60 * 24 });

    // Global throttle: avoid bursts (5 minutes)
    const throttleKey = "visit:last:notify";
    const throttleSet = await redis.set(throttleKey, "1", { nx: true, ex: 60 * 5 });

    let notified = false;

    if (uniqSet && throttleSet) {
      if (!process.env.RESEND_API_KEY || !NOTIFY_TO) {
        // Missing email configuration — skip sending but report ok
        return NextResponse.json({ ok: true, notified: false, reason: "missing-config" });
      }

      const resend = new Resend(process.env.RESEND_API_KEY);
      const subject = "Nouvelle visite sur votre portfolio";
      const html = `
        <div style="font-family:system-ui,Arial,sans-serif">
          <h3>Nouvelle visite</h3>
          <p>Une nouvelle visite a été détectée.</p>
          <ul>
            <li>IP: ${ip}</li>
            <li>User-Agent: ${ua}</li>
            <li>Referrer: ${referer}</li>
            <li>Heure: ${new Date().toISOString()}</li>
          </ul>
          <p>(Déduplication: visite unique 24h + anti-spam global 5 min)</p>
        </div>`;

      await resend.emails.send({
        from: NOTIFY_FROM,
        to: NOTIFY_TO,
        subject,
        html,
      });
      notified = true;
    }

    return NextResponse.json({ ok: true, notified });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
