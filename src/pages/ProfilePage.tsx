import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, QrCode, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handlePhotoUpload = () => {
    toast.success("ฟีเจอร์อัพโหลดรูปภาพกำลังพัฒนา");
  };

  const handleAIFaceSwap = () => {
    toast.success("ฟีเจอร์ AI Face Swap กำลังพัฒนา");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => navigate("/elderly")}
          className="mb-4 text-primary-foreground hover:bg-white/20 gap-2"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl">กลับ</span>
        </Button>
        <h1 className="text-3xl font-bold">โปรไฟล์</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Photo */}
        <Card className="p-8 border-2 text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="h-40 w-40 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Camera className="h-16 w-16 text-muted-foreground" />
                )}
              </div>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 h-12 w-12 rounded-full"
                onClick={handlePhotoUpload}
              >
                <Camera className="h-6 w-6" />
              </Button>
            </div>
            <div>
              <h2 className="text-3xl font-bold">คุณยาย สมศรี</h2>
              <p className="text-xl text-muted-foreground mt-2">
                อายุ 75 ปี
              </p>
            </div>
          </div>
        </Card>

        {/* QR Code */}
        <Card className="p-8 border-2">
          <div className="flex flex-col items-center space-y-4">
            <QrCode className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-semibold">QR Code ของฉัน</h3>
            <div className="h-48 w-48 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <QrCode className="h-32 w-32 mx-auto mb-2" />
                <p className="text-lg">QR Code จะแสดงที่นี่</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground text-center">
              แสกน QR Code เพื่อเข้าถึงข้อมูลของคุณ
            </p>
          </div>
        </Card>

        {/* AI Face Swap */}
        <Card className="p-8 border-2 bg-gradient-to-br from-accent/20 to-secondary/20">
          <div className="flex flex-col items-center space-y-4">
            <Sparkles className="h-12 w-12 text-accent" />
            <h3 className="text-2xl font-semibold text-center">
              AI Face Swap
            </h3>
            <p className="text-lg text-muted-foreground text-center">
              เปลี่ยนใบหน้าของคุณให้เข้ากับเทมเพลตสนุกๆ
            </p>
            <Button
              size="lg"
              className="w-full h-14 text-xl bg-accent hover:bg-accent/90 gap-2"
              onClick={handleAIFaceSwap}
            >
              <Sparkles className="h-6 w-6" />
              ลองเล่น AI Face Swap
            </Button>
          </div>
        </Card>

        {/* Personal Info */}
        <Card className="p-6 border-2">
          <h3 className="text-2xl font-semibold mb-4">ข้อมูลส่วนตัว</h3>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between py-3 border-b">
              <span className="text-muted-foreground">ชื่อ-นามสกุล</span>
              <span className="font-semibold">คุณยาย สมศรี ใจดี</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-muted-foreground">อายุ</span>
              <span className="font-semibold">75 ปี</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-muted-foreground">กรุ๊ปเลือด</span>
              <span className="font-semibold">O+</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-muted-foreground">ผู้ติดต่อฉุกเฉิน</span>
              <span className="font-semibold">คุณสมชาย (ลูก)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
