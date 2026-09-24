import React from "react";
import EncyclopediaCatalogClient from "@/components/home/EncyclopediaCatalogClient";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. DIRECT 4-COLUMN BOTANICAL & AQUATIC ENCYCLOPEDIA (NO HERO SECTION) */}
      <EncyclopediaCatalogClient />

      {/* 2. 6 CORE SPECIES CATEGORIES DIRECTORY */}
      <FeaturedCategories />

      {/* 3. BOTANICAL & AQUARIUM EDUCATION MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          badge="আমাদের উদ্দেশ্য ও অঙ্গীকার"
          title="উদ্ভিদ ও জলজ প্রাণীর উন্মুক্ত তথ্য ও সঠিক পরিচর্যা"
          subtitle="বাংলাদেশের জলবায়ু ও পরিবেশের সাথে সামঞ্জস্য রেখে প্রতিটি প্রজাতির সঠিক যত্ন, পানির মান, মাটির মিশ্রণ ও বিশেষজ্ঞ পরামর্শ সবার জন্য উন্মুক্ত।"
          viewAllHref="#categories"
          viewAllText="ক্যাটাগরি সমূহ"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              সঠিক বৈজ্ঞানিক তথ্য
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
              প্রামাণ্য প্রজাতি পরিচিতি
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              চ্যাম্পিয়নশিপ লাইনের বেটা ও গাপ্পি মাছ থেকে শুরু করে বিরল ইনডোর মনস্টেরা, ফিকাস বনসাই এবং জলপদ্মের সঠিক বৈজ্ঞানিক নাম ও বাংলাদেশের আঞ্চলিক নাম সংকলন।
            </p>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              পরিচর্যা ও পরিবেশ
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
              সূর্যালোক ও আবহাওয়া গাইড
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              কোন উদ্ভিদের জন্য সরাসরি প্রখর রোদ দরকার আর কোনটি উজ্জ্বল পরোক্ষ আলো বা ছায়াযুক্ত আর্দ্র স্থানে ভালো থাকে—তার বিস্তারিত দিকনির্দেশনা।
            </p>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              মাছ ও উদ্ভিদের পুষ্টি
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
              পানি, মাটি ও খাদ্য ব্যবস্থাপনা
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              অ্যাকুয়ারিয়ামের পানির pH ও তাপমাত্রা নিয়ন্ত্রণ, পট কালচারে মাটির সঠিক ড্রেনেজ ও সার প্রয়োগের সঠিক নিয়মাবলী বিনামূল্যে জানার সুযোগ।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
