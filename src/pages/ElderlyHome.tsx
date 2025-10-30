import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

const todayActivities = [
  { id: 1, icon: "💊", title: "ทานยา", bgColor: "bg-accent" },
  { id: 2, icon: "🚶", title: "เดินเล่น", bgColor: "bg-card" },
  { id: 3, icon: "🎨", title: "วาดรูป", bgColor: "bg-card" }
];

const activityCenter = [
  { id: 1, icon: "💊", title: "ยา", bgColor: "bg-accent", path: "/elderly" },
  { id: 2, icon: "🏥", title: "สุขภาพ", bgColor: "bg-health", path: "/elderly" },
  { id: 3, icon: "🏃", title: "ออกกำลังกาย", bgColor: "bg-exercise", path: "/elderly" },
  { id: 4, icon: "🎓", title: "เรียนรู้", bgColor: "bg-learn", path: "/elderly/activity/1" }
];

const ElderlyHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">
            สวัสดี, เจลานี!
          </h1>
          <button 
            className="p-3 hover:bg-muted rounded-full transition-colors"
            onClick={() => navigate("/profile")}
          >
            <Settings className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Today's Activity */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            กิจกรรมวันนี้
          </h2>
          <div className="space-y-3">
            {todayActivities.map((activity) => (
              <Card 
                key={activity.id} 
                className={`p-5 border-0 shadow-sm ${activity.bgColor} cursor-pointer hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{activity.icon}</span>
                  <p className="text-xl font-medium text-foreground">
                    {activity.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Activity Center */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            ศูนย์กิจกรรม
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {activityCenter.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`${item.bgColor} border-0 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden`}
              >
                <div className="aspect-square flex flex-col items-center justify-center p-6">
                  <span className="text-5xl mb-3">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground text-center">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Need Help */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            ต้องการความช่วยเหลือ?
          </h2>
          <Card className="p-5 border-0 shadow-sm bg-card">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl">
                👩‍⚕️
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-foreground">
                  บริการลูกค้า
                </p>
                <p className="text-muted-foreground">
                  000-000-0000
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ElderlyHome;
