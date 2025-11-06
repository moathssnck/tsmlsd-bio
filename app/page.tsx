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
    <div className="min-h-screen bg-gradient-to-b from-background/90 to-background py-12 px-4" dir="rtl">
      <div className="max-w-md mx-auto">

        {/* Profile Section */}
        <div className="text-center mb-10">
          <div className="w-28 h-30 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-primary animate-fadeIn">
            <img src="/images (1).jpeg"  alt="logo" className="rounded-full"/>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 animate-fadeIn">
            تأمين السيارات
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl animate-fadeIn">
            قارن الأسعار واكتشف أحدث العروض الحصرية
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4 mb-10">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                className="block w-full bg-card/80 border border-border rounded-xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg group animate-fadeIn"
              >
                <div className="flex items-center justify-center gap-3">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-card-foreground font-semibold text-lg">{link.label}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6 animate-fadeIn">
          <button
            onClick={() => setPrivacyOpen(true)}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-border hover:bg-primary/20 transition"
          >
            <FileText className="w-4 h-4" /> سياسة الخصوصية
          </button>
          <button
            onClick={() => setSecurityOpen(true)}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-border hover:bg-primary/20 transition"
          >
            <Shield className="w-4 h-4" /> الأمان والحماية
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-muted-foreground text-sm animate-fadeIn">
          © 2025 جميع الحقوق محفوظة
        </p>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-2xl shadow-xl backdrop-blur-md"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              سياسة الخصوصية
            </DialogTitle>
            <DialogDescription className="text-right">
              آخر تحديث: 17 أكتوبر 2025
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-right leading-relaxed">
            {/* Sections */}
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. جمع المعلومات</h3>
              <p className="text-muted-foreground">
                نحن نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا، بما في ذلك الاسم وعنوان البريد الإلكتروني ومعلومات الاتصال الأخرى. كما نجمع معلومات تلقائياً حول استخدامك للموقع من خلال ملفات تعريف الارتباط وتقنيات التتبع المماثلة.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. استخدام المعلومات</h3>
              <p className="text-muted-foreground">
                نستخدم المعلومات لتقديم وتحسين خدماتنا، والتواصل معك، وتخصيص تجربتك، وحماية أمن الموقع. لن نشارك معلوماتك مع أطراف ثالثة إلا بما يقتضيه القانون.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. حماية البيانات</h3>
              <p className="text-muted-foreground">
                نتخذ تدابير أمنية لحماية معلوماتك من الوصول غير المصرح به أو الاستخدام أو الكشف. نستخدم التشفير وبروتوكولات الأمان القياسية.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. حقوقك</h3>
              <p className="text-muted-foreground">
                لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك الاعتراض على معالجة بياناتك أو طلب تقييد المعالجة عن طريق التواصل معنا.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">5. ملفات تعريف الارتباط</h3>
              <p className="text-muted-foreground">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكم فيها عبر إعدادات المتصفح.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">6. التغييرات على السياسة</h3>
              <p className="text-muted-foreground">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية.
              </p>
            </section>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setPrivacyOpen(false)}>إغلاق</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Security Dialog */}
      <Dialog open={securityOpen} onOpenChange={setSecurityOpen}>
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-2xl shadow-xl backdrop-blur-md"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              الأمان والحماية
            </DialogTitle>
            <DialogDescription className="text-right">
              التزامنا بحماية بياناتك
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-right leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                التشفير والأمان
              </h3>
              <p className="text-muted-foreground">
                نستخدم بروتوكول SSL/TLS لتشفير جميع البيانات المنقولة بين متصفحك وخوادمنا. جميع البيانات الحساسة مشفرة عند التخزين.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">أدوار الأمان والصلاحيات</h3>
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">المستخدم العادي</h4>
                  <p className="text-sm text-muted-foreground">عرض المحتوى العام والتفاعل مع الروابط.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">المستخدم المسجل</h4>
                  <p className="text-sm text-muted-foreground">حفظ التفضيلات والوصول للمحتوى الحصري.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">المسؤول</h4>
                  <p className="text-sm text-muted-foreground">إدارة المحتوى والمراقبة الكاملة.</p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setSecurityOpen(false)}>إغلاق</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
