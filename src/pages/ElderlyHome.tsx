import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Pill, User } from "lucide-react";

const mockActivities = [
  {
    id: 1,
    title: "โยคะเบาๆ ยามเช้า",
    description: "ออกกำลังกายเบาๆ ช่วยให้สุขภาพแข็งแรง",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ปลูกต้นไม้ในสวน",
    description: "กิจกรรมทำสวนผ่อนคลาย",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "เรียนวาดรูป",
    description: "สร้างสรรค์งานศิลปะสวยงาม",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop"
  }
];

const mockAppointments = [
  { id: 1, date: "15 พ.ค. 2567", time: "10:00 น.", doctor: "นพ. สมชาย" },
  { id: 2, date: "22 พ.ค. 2567", time: "14:30 น.", doctor: "นพ. สมหญิง" }
];

const mockMedications = [
  { id: 1, name: "ยาความดัน", time: "08:00 น., 20:00 น." },
  { id: 2, name: "ยาเบาหวาน", time: "08:00 น., 12:00 น., 18:00 น." },
  { id: 3, name: "วิตามิน", time: "08:00 น." }
];

const ElderlyHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-20">
      {/* Header with Profile */}
      <div className="bg-primary text-primary-foreground p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30"
            onClick={() => navigate("/profile")}
          >
            <User className="h-8 w-8" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">สวัสดีค่ะ</h1>
            <p className="text-lg opacity-90">คุณยาย สมศรี</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Activities Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            กิจกรรมวันนี้
          </h2>
          <div className="space-y-4">
            {mockActivities.map((activity) => (
              <Card
                key={activity.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2"
                onClick={() => navigate(`/elderly/activity/${activity.id}`)}
              >
                <div className="flex gap-4 p-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Doctor Appointments */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              นัดหมอ
            </h2>
          </div>
          <div className="space-y-3">
            {mockAppointments.map((apt) => (
              <Card key={apt.id} className="p-5 border-2 bg-card">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold">{apt.doctor}</p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {apt.date} เวลา {apt.time}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Medications */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Pill className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">
              รายการยา
            </h2>
          </div>
          <div className="space-y-3">
            {mockMedications.map((med) => (
              <Card key={med.id} className="p-5 border-2 bg-secondary/30">
                <div>
                  <p className="text-2xl font-semibold">{med.name}</p>
                  <p className="text-lg text-muted-foreground mt-1">
                    เวลา: {med.time}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElderlyHome;
