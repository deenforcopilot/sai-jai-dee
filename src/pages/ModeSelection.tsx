import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const ModeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            ฉันคือ
          </h1>
          <p className="text-base text-muted-foreground">
            เลือกหนึ่งที่เหมาะกับคุณ
          </p>
        </div>

        <div className="space-y-4 pt-4">
          {/* Parent Card */}
          <Card
            onClick={() => navigate("/relative")}
            className="overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 border-0 shadow-md bg-primary"
          >
            <div className="p-8 flex flex-col items-center justify-center min-h-[240px]">
              <div className="text-6xl mb-4">👨‍👩‍👧</div>
              <h2 className="text-3xl font-bold text-primary-foreground">
                ผู้ดูแล
              </h2>
            </div>
          </Card>

          {/* Child Card */}
          <Card
            onClick={() => navigate("/elderly")}
            className="overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 border-0 shadow-md bg-secondary"
          >
            <div className="p-8 flex flex-col items-center justify-center min-h-[240px]">
              <div className="text-6xl mb-4">👴</div>
              <h2 className="text-3xl font-bold text-secondary-foreground">
                ผู้สูงอายุ
              </h2>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
