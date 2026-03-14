import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, XCircle, Loader2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Verify = () => {
  const [certId, setCertId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "not-found">("idle");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      // Demo: IDs starting with "KEN" are found
      setStatus(certId.toUpperCase().startsWith("KEN") ? "found" : "not-found");
    }, 1500);
  };

  return (
    <section className="section-padding bg-background min-h-[80vh]">
      <div className="container-max max-w-2xl">
        <SectionHeading
          label="Verification"
          title="Certificate Verification"
          description="Enter your certificate number to verify its authenticity and view details."
        />

        <form onSubmit={handleVerify} className="card-premium p-8">
          <div className="flex gap-3">
            <input
              required
              value={certId}
              onChange={(e) => { setCertId(e.target.value); setStatus("idle"); }}
              placeholder="Enter Certificate Number (e.g., KEN-2024-001)"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
            <button type="submit" className="btn-primary flex items-center gap-2" disabled={status === "loading"}>
              {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
              Verify
            </button>
          </div>
        </form>

        {status === "found" && (
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mt-8 card-premium p-8 border-l-4 border-accent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Certificate Verified</h3>
                <p className="text-xs text-accent font-semibold">Authentic & Valid</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div><span className="text-muted-foreground">Student Name:</span><p className="font-semibold text-foreground">Demo Student</p></div>
              <div><span className="text-muted-foreground">Certificate ID:</span><p className="font-semibold text-foreground">{certId.toUpperCase()}</p></div>
              <div><span className="text-muted-foreground">Course:</span><p className="font-semibold text-foreground">PGDCA</p></div>
              <div><span className="text-muted-foreground">Status:</span><p className="font-semibold text-accent">✓ Valid</p></div>
            </div>
          </motion.div>
        )}

        {status === "not-found" && (
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mt-8 card-premium p-8 border-l-4 border-destructive">
            <div className="flex items-center gap-3">
              <XCircle size={24} className="text-destructive" />
              <div>
                <h3 className="font-heading font-semibold text-foreground">Certificate Not Found</h3>
                <p className="text-sm text-muted-foreground mt-1">Please check the certificate number and try again, or contact our office for assistance.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Verify;
