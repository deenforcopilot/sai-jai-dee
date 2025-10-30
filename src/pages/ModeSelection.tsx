import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, User } from "lucide-react";

const ModeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            ยินดีต้อนรับ
          </h1>
          <p className="text-xl text-muted-foreground">
            กรุณาเลือกโหมดการใช้งาน
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <Button
            onClick={() => navigate("/elderly")}
            size="lg"
            className="w-full h-24 text-2xl gap-4 bg-primary hover:bg-primary/90 shadow-lg"
          >
            <User className="h-10 w-10" />
            โหมดผู้สูงอายุ
          </Button>

          <Button
            onClick={() => navigate("/relative")}
            size="lg"
            variant="secondary"
            className="w-full h-24 text-2xl gap-4 shadow-lg"
          >
            <Users className="h-10 w-10" />
            โหมดญาติ
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-8">
          เลือกโหมดที่เหมาะสมกับคุณ
        </p>
      </div>
    </div>
  );
};

export default ModeSelection;
