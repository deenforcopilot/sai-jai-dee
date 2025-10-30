import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Pill, Activity, ArrowLeft, Plus } from "lucide-react";
import { toast } from "sonner";

const RelativeHome = () => {
  const navigate = useNavigate();

  const handleAddActivity = () => {
    toast.success("ฟีเจอร์นี้กำลังพัฒนา");
  };

  const handleManageSchedule = () => {
    toast.success("ฟีเจอร์นี้กำลังพัฒนา");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-20">
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground p-6 rounded-b-3xl shadow-lg">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => navigate("/")}
          className="mb-4 hover:bg-white/20 gap-2"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl">กลับหน้าหลัก</span>
        </Button>
        <h1 className="text-3xl font-bold">โหมดญาติ</h1>
        <p className="text-lg opacity-90 mt-2">
          จัดการข้อมูลผู้สูงอายุ
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            เมนูหลัก
          </h2>
          <div className="grid gap-4">
            <Card
              className="p-6 border-2 cursor-pointer hover:shadow-xl hover:border-primary transition-all"
              onClick={handleAddActivity}
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                  <Plus className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">เพิ่มกิจกรรมใหม่</h3>
                  <p className="text-lg text-muted-foreground">
                    สร้างกิจกรรมสำหรับผู้สูงอายุ
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="p-6 border-2 cursor-pointer hover:shadow-xl hover:border-primary transition-all"
              onClick={handleManageSchedule}
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">จัดการตารางนัดหมอ</h3>
                  <p className="text-lg text-muted-foreground">
                    เพิ่ม/แก้ไข นัดหมอและยา
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Health Summary */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            สรุปสุขภาพ
          </h2>
          <Card className="p-6 border-2 bg-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-3">
                  <Activity className="h-8 w-8 text-secondary" />
                  <div>
                    <p className="text-xl font-semibold">กิจกรรมสัปดาห์นี้</p>
                    <p className="text-lg text-muted-foreground">12 กิจกรรม</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-3">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-xl font-semibold">นัดหมอถัดไป</p>
                    <p className="text-lg text-muted-foreground">15 พ.ค. 2567</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Pill className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-xl font-semibold">ยาที่ต้องกิน</p>
                    <p className="text-lg text-muted-foreground">3 รายการ</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* View as Elder */}
        <Button
          size="lg"
          className="w-full h-16 text-xl bg-primary hover:bg-primary/90"
          onClick={() => navigate("/elderly")}
        >
          ดูมุมมองผู้สูงอายุ
        </Button>
      </div>
    </div>
  );
};

export default RelativeHome;
