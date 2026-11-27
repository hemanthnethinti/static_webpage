import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, CheckCircle, Copy, Check } from 'lucide-react';
import { boutiqueInfo } from '../data/jewelryData.js';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  interest: '',
};

const salonServices = [
  'Private Styling',
  'Bridal Consultation',
  'Custom Ring Sizing',
  'Hallmark Inspection',
];

export default function BoutiqueSection({ enquiredProduct, onClearEnquiry }) {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const todayISO = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (enquiredProduct) {
      setSubmitted(false);
      setForm((prev) => ({
        ...prev,
        interest: enquiredProduct.category || prev.interest,
      }));
    }
  }, [enquiredProduct]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email address';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[\d\s+()-]{8,15}$/.test(form.phone))
      errs.phone = 'Enter a valid phone number (8–15 digits)';
    if (!form.date) errs.date = 'Preferred date is required';
    if (!form.time) errs.time = 'Preferred time is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(boutiqueInfo.address);
      }
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const inputClass = (field) =>
    `w-full px-3.5 py-2.5 bg-ivory/70 border rounded-xl text-sm text-charcoal placeholder-stone/60 focus:outline-none focus:bg-white focus:border-gold transition-colors ${
      errors[field] ? 'border-red-500' : 'border-border'
    }`;

  return (
    <section id="boutique" className="py-8 sm:py-12 pb-14">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-bold mb-2">
            Visit Our Flagship Boutique
          </h2>
          <p className="text-stone text-xs sm:text-sm mb-3">
            Experience our jewellery collections in person at Connaught Place or reserve a viewing slot.
          </p>
          <span className="section-accent-bar" />
        </div>

        {/* Highlight Banner inspired by PH7 Distribution Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#252525] via-[#2F2A23] to-[#3A3227] p-6 sm:p-8 text-white shadow-[0_14px_32px_rgba(37,37,37,0.14)]">
          <div className="hidden sm:block absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-gold mb-1.5">
                NEW DELHI FLAGSHIP SALON
              </p>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Personalised Consultations in Connaught Place
              </h3>
              <p className="text-ivory/85 text-xs sm:text-sm leading-relaxed mb-4">
                Try on signature pieces, explore bridal sets with family, and review metal purity specifications in comfort.
              </p>
              <div className="flex flex-wrap gap-2">
                {salonServices.map((service) => (
                  <span
                    key={service}
                    className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold text-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyAddress}
              className="self-start lg:self-center inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-charcoal hover:bg-gold hover:text-white rounded-full text-xs font-semibold transition-colors shrink-0 shadow-xs"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Address Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Boutique Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Store Details + Appointment Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Store Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-border rounded-2xl p-5 sm:p-7 space-y-5 shadow-[0_8px_22px_rgba(37,37,37,0.04)]">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-1.5">
                {boutiqueInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                Open daily for walk-in collectors and scheduled bridal viewings.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm border-t border-border pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-charcoal leading-relaxed">{boutiqueInfo.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a
                  href={boutiqueInfo.phoneHref}
                  className="text-charcoal hover:text-gold-hover font-medium transition-colors"
                >
                  {boutiqueInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${boutiqueInfo.email}`}
                  className="text-charcoal hover:text-gold-hover font-medium transition-colors break-all"
                >
                  {boutiqueInfo.email}
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Opening Hours
                </h4>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                {boutiqueInfo.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-baseline justify-between gap-2"
                  >
                    <span className="text-stone">{h.days}</span>
                    <span className="text-charcoal font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointment Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-5 sm:p-7 shadow-[0_8px_22px_rgba(37,37,37,0.04)]">
            <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-1">
              Book a Private Viewing
            </h3>
            <p className="text-xs sm:text-sm text-stone mb-5">
              Select your preferred date and time to schedule an in-store viewing.
            </p>

            {enquiredProduct && !submitted && (
              <div className="mb-5 px-4 py-2.5 bg-gold-soft border border-gold/50 rounded-xl flex items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-charcoal">
                  Enquiring about:{' '}
                  <span className="font-bold text-charcoal">{enquiredProduct.name}</span>
                </p>
                {onClearEnquiry && (
                  <button
                    type="button"
                    onClick={onClearEnquiry}
                    className="text-xs text-stone hover:text-charcoal underline shrink-0"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}

            {submitted ? (
              <div className="text-center py-8 px-2">
                <CheckCircle className="w-11 h-11 text-gold mx-auto mb-3" />
                <h4 className="font-heading text-2xl text-charcoal font-bold mb-2">
                  Appointment Request Received
                </h4>
                <p className="text-stone text-sm mb-3 max-w-sm mx-auto leading-relaxed">
                  Thank you, {form.name}. Your viewing preference for{' '}
                  <span className="text-charcoal font-semibold">{form.date}</span> at{' '}
                  <span className="text-charcoal font-semibold">{form.time}</span> has been noted.
                </p>
                <p className="text-stone text-xs italic bg-ivory border border-border rounded-xl px-4 py-2 inline-block">
                  Frontend demo notice: No real appointment or server booking was created.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialFormState);
                      setSubmitted(false);
                      setErrors({});
                      if (onClearEnquiry) onClearEnquiry();
                    }}
                    className="mt-5 px-5 py-2.5 text-xs font-semibold rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                  >
                    Book Another Viewing
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="appointment-name"
                    className="block text-xs font-semibold text-charcoal mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="appointment-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Sharma"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="appointment-email"
                      className="block text-xs font-semibold text-charcoal mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="appointment-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="appointment-phone"
                      className="block text-xs font-semibold text-charcoal mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="appointment-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass('phone')}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="appointment-date"
                      className="block text-xs font-semibold text-charcoal mb-1.5"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="appointment-date"
                      type="date"
                      name="date"
                      min={todayISO}
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass('date')}
                    />
                    {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="appointment-time"
                      className="block text-xs font-semibold text-charcoal mb-1.5"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="appointment-time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={inputClass('time')}
                    >
                      <option value="">Select time slot</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">1:00 PM</option>
                      <option value="02:00 PM">2:00 PM</option>
                      <option value="03:00 PM">3:00 PM</option>
                      <option value="04:00 PM">4:00 PM</option>
                      <option value="05:00 PM">5:00 PM</option>
                      <option value="06:00 PM">6:00 PM</option>
                    </select>
                    {errors.time && <p className="text-red-600 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointment-interest"
                    className="block text-xs font-semibold text-charcoal mb-1.5"
                  >
                    Jewellery Interest (Optional)
                  </label>
                  <select
                    id="appointment-interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={inputClass('interest')}
                  >
                    <option value="">Select collection interest</option>
                    <option value="necklaces">Necklaces</option>
                    <option value="rings">Rings &amp; Engagement</option>
                    <option value="earrings">Earrings</option>
                    <option value="bridal">Bridal Collection</option>
                    <option value="custom">Custom Consultation</option>
                    <option value="general">General Viewing</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-charcoal text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-gold-hover transition-colors shadow-xs"
                >
                  Request Appointment
                </button>

                <p className="text-stone text-xs text-center italic">
                  Frontend showcase demo — no real appointment is created.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
