import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  href: string;
  isExternal?: boolean;
  ctaText: string;
  features: string[];
}

export default function ProductCard({
  title,
  subtitle,
  description,
  badge,
  href,
  isExternal,
  ctaText,
  features,
}: ProductCardProps) {
  const isAvailable = !badge;

  return (
    <div className={`card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
      isAvailable ? 'border-blue-200 ring-1 ring-blue-500/10' : 'border-slate-200'
    }`}>
      <div>
        {/* Header & Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-black uppercase tracking-wider text-blue-600 font-mono">
            {subtitle}
          </span>
          {badge ? (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-bold border border-amber-200">
              {badge}
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200">
              Disponível
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features bullet points */}
        <div className="border-t border-slate-100 pt-4 mb-6">
          <ul className="space-y-2.5 text-xs text-slate-600">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button Action */}
      <div className="pt-2">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-primary text-xs uppercase tracking-wider justify-between"
          >
            <span>{ctaText}</span>
            <ExternalLink size={14} />
          </a>
        ) : (
          <Link
            href={href}
            className={`w-full text-xs uppercase tracking-wider justify-between ${
              isAvailable ? 'btn-primary' : 'btn-outline text-slate-600'
            }`}
          >
            <span>{ctaText}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
