import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export const InteractiveFraudSimulator: React.FC = () => {
  const [amount, setAmount] = useState<number>(3200);
  const [velocityMinutes, setVelocityMinutes] = useState<number>(3);
  const [geoMismatch, setGeoMismatch] = useState<boolean>(true);
  const [newDevice, setNewDevice] = useState<boolean>(true);
  const [merchantCategory, setMerchantCategory] = useState<'retail' | 'international_wire' | 'crypto'>('international_wire');

  // Rule-based engine logic mirroring FraudShield
  const calculateRisk = () => {
    let score = 5;
    const triggeredRules: string[] = [];

    // Amount thresholds
    if (amount > 10000) {
      score += 40;
      triggeredRules.push("High-Value Transfer Flag (> $10,000) [+40]");
    } else if (amount > 2500) {
      score += 20;
      triggeredRules.push("Elevated Transaction Volume (> $2,500) [+20]");
    }

    // Velocity check
    if (velocityMinutes < 5) {
      score += 25;
      triggeredRules.push("Rapid Consecutive Transaction Velocity (< 5 min) [+25]");
    } else if (velocityMinutes < 15) {
      score += 10;
      triggeredRules.push("Moderate Transaction Velocity (< 15 min) [+10]");
    }

    // Geolocation divergence
    if (geoMismatch) {
      score += 30;
      triggeredRules.push("IP & Geolocation Inconsistency Detected [+30]");
    }

    // New device
    if (newDevice) {
      score += 15;
      triggeredRules.push("Unrecognized Device Fingerprint / User Agent [+15]");
    }

    // Merchant category
    if (merchantCategory === 'crypto') {
      score += 20;
      triggeredRules.push("Elevated Merchant Classification: Crypto / Virtual Asset [+20]");
    } else if (merchantCategory === 'international_wire') {
      score += 15;
      triggeredRules.push("Elevated Merchant Classification: Cross-Border Wire [+15]");
    }

    const finalScore = Math.min(100, score);

    let status: 'APPROVED' | 'CHALLENGE_OTP' | 'BLOCKED';
    let statusText: string;
    let badgeColor: string;

    if (finalScore >= 65) {
      status = 'BLOCKED';
      statusText = 'HIGH RISK: Transaction Intercepted & Flagged for Audit';
      badgeColor = 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    } else if (finalScore >= 35) {
      status = 'CHALLENGE_OTP';
      statusText = 'MEDIUM RISK: Multi-Factor OTP Verification Triggered';
      badgeColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    } else {
      status = 'APPROVED';
      statusText = 'LOW RISK: Transaction Approved via Automated Clear';
      badgeColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }

    return { finalScore, status, statusText, badgeColor, triggeredRules };
  };

  const { finalScore, status, statusText, badgeColor, triggeredRules } = calculateRisk();

  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-5 sm:p-7 backdrop-blur-xl space-y-6">
      
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <Shield className="w-4 h-4" />
            </span>
            <h4 className="font-bold text-white text-base">
              FraudShield Interactive Engine Demo
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Test the real-time rule evaluation & risk scoring logic developed for the FraudShield platform.
          </p>
        </div>
        <div className="text-[11px] font-mono text-teal-400 bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-full w-fit">
          FastAPI Engine Simulation
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Amount Slider */}
          <div className="space-y-1.5 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Transaction Amount ($ USD):</span>
              <span className="font-mono font-bold text-teal-300">${amount.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="50"
              max="20000"
              step="50"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-teal-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$50</span>
              <span>$5,000</span>
              <span>$10,000+ (High Flag)</span>
              <span>$20,000</span>
            </div>
          </div>

          {/* Velocity Slider */}
          <div className="space-y-1.5 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Time Since Previous Transaction:</span>
              <span className="font-mono font-bold text-indigo-300">{velocityMinutes} minutes</span>
            </div>
            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={velocityMinutes}
              onChange={(e) => setVelocityMinutes(Number(e.target.value))}
              className="w-full accent-indigo-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1 min (Velocity Risk)</span>
              <span>15 min</span>
              <span>60 min (Normal)</span>
            </div>
          </div>

          {/* Toggle Switches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setGeoMismatch(!geoMismatch)}
              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                geoMismatch
                  ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400'
              }`}
            >
              <div>
                <div className="font-semibold text-white">Geo / IP Mismatch</div>
                <div className="text-[11px] text-slate-400">Different country detected</div>
              </div>
              <span className={`w-3 h-3 rounded-full ${geoMismatch ? 'bg-rose-500 animate-pulse' : 'bg-slate-700'}`} />
            </button>

            <button
              onClick={() => setNewDevice(!newDevice)}
              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                newDevice
                  ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400'
              }`}
            >
              <div>
                <div className="font-semibold text-white">New Device Signature</div>
                <div className="text-[11px] text-slate-400">Unrecognized browser/IP</div>
              </div>
              <span className={`w-3 h-3 rounded-full ${newDevice ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'}`} />
            </button>
          </div>

          {/* Merchant Category */}
          <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <label className="text-xs text-slate-300 font-medium block">
              Merchant Transaction Category:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'retail', label: 'Standard Retail' },
                { id: 'international_wire', label: 'Cross-Border Wire' },
                { id: 'crypto', label: 'Crypto Asset' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMerchantCategory(m.id as any)}
                  className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                    merchantCategory === m.id
                      ? 'bg-teal-500/20 border-teal-500/50 text-teal-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Evaluation Output Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">COMPUTED RISK SCORE</span>
              <span className={`text-xs font-mono px-2 py-0.5 rounded border font-semibold ${badgeColor}`}>
                {status}
              </span>
            </div>

            {/* Score Gauge */}
            <div className="flex items-end gap-3">
              <div className="text-4xl font-black text-white font-mono">
                {finalScore}
                <span className="text-slate-500 text-lg font-normal"> / 100</span>
              </div>
              <div className="flex-1 pb-1">
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      finalScore >= 65
                        ? 'bg-rose-500'
                        : finalScore >= 35
                        ? 'bg-amber-500'
                        : 'bg-emerald-400'
                    }`}
                    style={{ width: `${finalScore}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-medium bg-slate-900 p-2.5 rounded-lg border border-slate-800/80">
              {statusText}
            </p>

            {/* Triggered Rules List */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
              <div className="text-[11px] font-mono text-slate-500 uppercase">
                Active Trigger Log:
              </div>
              {triggeredRules.length === 0 ? (
                <div className="text-slate-500 text-xs italic">
                  No anomalous behavior detected. Safe baseline.
                </div>
              ) : (
                triggeredRules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-slate-300 text-[11px]">
                    <span className="text-teal-400 font-mono mt-0.5">›</span>
                    <span>{rule}</span>
                  </div>
                ))
              )}
            </div>

            {/* JSON Payload Preview */}
            <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 space-y-1">
              <div className="flex items-center justify-between text-slate-500">
                <span>FastAPI Response Payload:</span>
                <span>200 OK</span>
              </div>
              <pre className="p-2 bg-slate-900 rounded overflow-x-auto text-teal-300">
{JSON.stringify(
  {
    transaction_id: "TXN_78291A",
    risk_score: finalScore,
    action: status,
    requires_otp: status === 'CHALLENGE_OTP',
    rules_fired: triggeredRules.length,
    timestamp: "2026-10-24T19:40:00Z"
  },
  null,
  2
)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
