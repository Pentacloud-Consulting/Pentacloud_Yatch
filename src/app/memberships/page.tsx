import React from 'react';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Memories from "@/Yatch/Memberships/Memories";
import MembershipWorks from "@/Yatch/Memberships/Membership Works";
import VideoMember from "@/Yatch/Memberships/Video Member";
import MembershipTypes from "@/Yatch/Memberships/Membership Types";
import Level from "@/Yatch/Memberships/Level";

export default function MembershipsPage() {
  return (
    <main>
      <Navbar />
      <div className="light-theme">
        <Memories />
        <MembershipWorks />
        <VideoMember />
        <MembershipTypes />
        <Level />
        <Footer />
      </div>
    </main>
  );
}
