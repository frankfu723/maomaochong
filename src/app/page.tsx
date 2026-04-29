"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPhone, FaMapMarkerAlt, FaPaw } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <SectionTitle title="關於我們" />
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            毛貓寵物動物醫院的誕生，源自一群獸醫師對動物深深的熱愛與責任感。
            他相信，每一隻寵物都應該被細緻照顧、被溫柔對待，不只是身體的病痛，
            更包括情緒的安撫與家庭的理解。
            <br /><br />
            為了實踐這份理想，寵物動物醫院打造了一個以「動物友善」為核心理念的診療空間，
            從動線設計、氣味管理到診療方式，處處用心，只為減少寵物的焦慮與壓力。
            院內的醫療團隊擁有專精於貓科、皮膚科、家醫科、中西醫整合療法、雷射治療、
            老年照護、腫瘤外科等豐富經驗，提供全方位且細緻的醫療服務。
            <br /><br />
            除了內外科與專科診療，我們也積極發展再生醫學與高階療法，
            從高壓氧治療到針灸調理，期望以更少的負擔帶來更深層的療癒效果。
            我們不只是解決眼前的病症，更關心寵物的整體福祉與長期生活品質。
            <br /><br />
            對我們來說，「醫療」從來不只是冷冰冰的技術，它應該是理解與信任的延伸。
            我們珍惜與每一位飼主的溝通時光，耐心傾聽，細心說明，只為讓每一位來到這裡的毛小孩與毛小孩爸媽都能感受到安心與尊重。
            <br /><br />
            在毛貓寵物動物醫院，我們陪伴的不只是疾病的治療，更是每一段與寵物共度的珍貴旅程。
          </p>
        </div>
      </section>

      {/* 🔹 醫療團隊 */}
      <section id="director" className="max-w-[1000px] mx-auto py-16 px-6 text-center">
        <SectionTitle title="醫療團隊" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10">
          {["/director.jpg", "/vet_1.jpg"].map((src, index) => (
            <div key={index} className="w-full">
              <Image
                src={src}
                alt={`獸醫師 ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-contain rounded-xl border-4 border-yellow-500 shadow-xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <SectionTitle title="主治項目" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...servicesList, "諾亞寵物高壓氧"].map((service, index) => (
            <div
              key={index}
              onClick={service === "諾亞寵物高壓氧" ? () => router.push("/oxygen") : undefined}
              className="bg-[#E6D6CC] shadow-md rounded-xl p-6 text-lg flex items-center gap-2 justify-center text-[#5A4032] cursor-pointer hover:bg-[#d5c3b8] transition"
            >
              <FaPaw className="text-yellow-500 text-2xl" /> {service}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 院內設備 */}
      <section id="equipment" className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white shadow-xl rounded-xl p-8 mt-12">
          <SectionTitle title="院內設備" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {equipmentList.map((item, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg text-center">
                <h3 className="text-xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
                  <FaPaw className="text-yellow-500" /> {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 聯絡方式 */}
      <section id="contact" className="max-w-6xl mx-auto py-16 px-6 text-center bg-white shadow-xl rounded-xl">
        <SectionTitle title="聯絡方式" />
        <div className="bg-[#E6D6CC] shadow-lg rounded-xl p-8 mt-6">
          <div className="text-lg flex flex-col items-center gap-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              地址：408台中市南屯區文心路一段372號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：04-23286789
            </p>
            <p className="flex items-center gap-1 whitespace-nowrap">
              <span>LINE線上諮詢：</span>
              <a
                href="https://line.me/R/ti/p/@315jaayn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 transition"
              >
                @315jaayn
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">門診時間</h3>
              <p>周一到周日 09:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 毛貓寵動物醫院"
            className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.638898382683!2d120.64703819999998!3d24.1493164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dac93728f7b%3A0x977f2d830f2c0c78!2z5q-b6LKT5a-15YuV54mp6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1747574622768!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}

// 🔹 可複用元件：標題
function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
      <FaPaw className="text-yellow-500" /> {title}
    </h2>
  );
}

// 🔹 主治項目清單
const servicesList = [
  "貓科", "皮膚科", "家醫科", "中西醫整合治療",
  "四級雷射治療", "老年慢性疾病治療", "一般內科",
  "一般外科", "軟組織外科", "腫瘤外科", "產科", "健康檢查", "再生醫學"
];

// 🔹 院內設備清單
const equipmentList = [
  { title: "高壓氧艙", description: "透過高壓氧艙提升細胞含氧量，加速術後癒合、改善炎症與慢性疼痛。" },
  { title: "院內寵物PCR檢驗", description: "快速檢測寵物傳染病，提升診斷效率，減少等候時間。" },
  { title: "IDEXX寵物專用血液檢測", description: "使用IDEXX先進儀器，提供精確快速的血液分析報告。" },
  { title: "數位X光-DR", description: "高解析數位X光影像，協助即時診斷與判讀。" },
  { title: "彩色超音波", description: "提供內部器官與心臟評估，適用於多種臨床診斷需求。" },
  { title: "寵物專用牙科數位X光", description: "針對牙科專用設計的X光，讓牙根與牙周問題一目了然。" },
  { title: "寵物專用牙科工作台", description: "為寵物牙科治療提供舒適、安全、符合人體工學的操作空間。" },
];

