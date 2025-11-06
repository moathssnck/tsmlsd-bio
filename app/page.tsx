"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Shield, Lock, FileText, Link } from "lucide-react";

export default function BioLinks() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  const applink = "https://zaimsor.com?label=4d4308863d81bc2af1cef766d83aeb4a";
  const links = [
    { icon: Link, label: "تامين السيارات", href: applink },
    { icon: Link, label: "تأمين شامل", href: applink },
    { icon: Link, label: "تامين ضد الغير", href: applink },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4" dir="rtl">
      <div className="max-w-md mx-auto">

        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600/20 to-blue-600/40 mx-auto mb-4 flex items-center justify-center shadow-xl border-2 border-blue-600 animate-fadeIn">
            <img src="/images (1).jpeg" alt="logo" className="rounded-full object-cover w-full h-full" />
          </div>
          <h1 className="flex justify-center items-center text-3xl md:text-4xl font-extrabold text-foreground mb-2 animate-fadeIn">
  تأمين السيارات
  <img src="/verified.png" alt="verified" width={30} className="ml-2"/>
</h1>

          <p className="text-muted-foreground text-lg md:text-xl animate-fadeIn">
            قارن الأسعار واكتشف أحدث العروض الحصرية
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4 mb-12">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                className="block w-full bg-white border border-gray-200 rounded-xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group animate-fadeIn"
              >
                <div className="flex items-center justify-center gap-3">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-800 font-semibold text-lg">{link.label}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8 animate-fadeIn">
          <button
            onClick={() => setPrivacyOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600/20 transition"
          >
            <FileText className="w-4 h-4" /> سياسة الخصوصية
          </button>
          <button
            onClick={() => setSecurityOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600/20 transition"
          >
            <Shield className="w-4 h-4" /> الأمان والحماية
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm animate-fadeIn">
          © 2025 جميع الحقوق محفوظة
        </p>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-200"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2 font-bold">
              <FileText className="w-6 h-6 text-blue-600" />
              سياسة الخصوصية
            </DialogTitle>
            <DialogDescription className="text-right text-sm text-gray-500">
              آخر تحديث: 17 أكتوبر 2025
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-right leading-relaxed mt-4">
            {/* Sections */}
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. جمع المعلومات</h3>
              <p className="text-gray-600">
                نحن نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا، بما في ذلك الاسم وعنوان البريد الإلكتروني ومعلومات الاتصال الأخرى.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. استخدام المعلومات</h3>
              <p className="text-gray-600">
                نستخدم المعلومات لتقديم وتحسين خدماتنا، والتواصل معك، وحماية أمن الموقع.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. حماية البيانات</h3>
              <p className="text-gray-600">
                نتخذ تدابير أمنية لحماية معلوماتك من الوصول غير المصرح به. نستخدم التشفير وبروتوكولات الأمان القياسية.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. حقوقك</h3>
              <p className="text-gray-600">
                لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها.
              </p>
            </section>
          </div>

          <div className="flex justify-end mt-6">
            <Button className="bg-blue-600 hover:bg-blue-600-dark text-white" onClick={() => setPrivacyOpen(false)}>إغلاق</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Security Dialog */}
      <Dialog open={securityOpen} onOpenChange={setSecurityOpen}>
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-200"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2 font-bold">
              <Shield className="w-6 h-6 text-blue-600" />
              الأمان والحماية
            </DialogTitle>
            <DialogDescription className="text-right text-sm text-gray-500">
              التزامنا بحماية بياناتك
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-right leading-relaxed mt-4">
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                التشفير والأمان
              </h3>
              <p className="text-gray-600">
                جميع البيانات الحساسة مشفرة عند النقل والتخزين باستخدام أحدث البروتوكولات.
              </p>
            </section>
          </div>

          <div className="flex justify-end mt-6">
            <Button className="bg-blue-600 hover:bg-blue-600-dark text-white" onClick={() => setSecurityOpen(false)}>إغلاق</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
