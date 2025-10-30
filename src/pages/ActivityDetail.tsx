import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const mockActivities = [
  {
    id: 1,
    title: "โยคะเบาๆ ยามเช้า",
    description: "ออกกำลังกายเบาๆ ช่วยให้สุขภาพแข็งแรง",
    fullDescription: "กิจกรรมโยคะเบาๆ ยามเช้า เหมาะสำหรับผู้สูงอายุ ช่วยยืดเหยียดกล้ามเนื้อ เพิ่มความยืดหยุ่นของร่างกาย และช่วยให้จิตใจสงบ เริ่มเวลา 08:00 น. ทุกวันจันทร์-ศุกร์",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ปลูกต้นไม้ในสวน",
    description: "กิจกรรมทำสวนผ่อนคลาย",
    fullDescription: "กิจกรรมทำสวน ปลูกต้นไม้ และดูแลสวนผัก ช่วยให้ผู้สูงอายุได้ออกกำลังกายเบาๆ ได้สัมผัสกับธรรมชาติ และสร้างความภาคภูมิใจจากการเห็นผลงานของตนเอง จัดทุกวันพุธและเสาร์ เวลา 16:00 น.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "เรียนวาดรูป",
    description: "สร้างสรรค์งานศิลปะสวยงาม",
    fullDescription: "ชั้นเรียนศิลปะสำหรับผู้สูงอายุ สอนการวาดภาพสีน้ำ สีไม้ และการระบายสี ช่วยกระตุ้นความคิดสร้างสรรค์ พัฒนาไหวพริบของมือและสมอง พบกันทุกวันอังคารและพฤหัสบดี เวลา 14:00 น.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop"
  }
];

const votingOptions = [
  { id: 1, title: "เรียนทำอาหารไทย", votes: 42 },
  { id: 2, title: "เรียนภาษาอังกฤษเบาๆ", votes: 38 },
  { id: 3, title: "เรียนรู้เทคโนโลยี", votes: 35 },
  { id: 4, title: "ชมภาพยนตร์คลาสสิก", votes: 45 }
];

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [votes, setVotes] = useState(votingOptions);
  const [voted, setVoted] = useState<number | null>(null);

  const activity = mockActivities.find(a => a.id === Number(id));

  if (!activity) {
    return <div>ไม่พบกิจกรรม</div>;
  }

  const handleVote = (optionId: number) => {
    if (voted !== null) {
      toast.error("คุณโหวตไปแล้วค่ะ");
      return;
    }

    setVotes(prev =>
      prev.map(option =>
        option.id === optionId
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
    setVoted(optionId);
    toast.success("โหวตสำเร็จแล้วค่ะ ขอบคุณค่ะ");
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
        <h1 className="text-3xl font-bold">{activity.title}</h1>
      </div>

      <div className="p-6 space-y-8">
        {/* Activity Image and Description */}
        <Card className="overflow-hidden border-2">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <p className="text-2xl leading-relaxed text-foreground">
              {activity.fullDescription}
            </p>
          </div>
        </Card>

        {/* Voting Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            โหวตกิจกรรมเดือนหน้า
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            เลือกกิจกรรมที่คุณอยากทำในเดือนหน้า
          </p>
          <div className="space-y-4">
            {votes.map((option) => (
              <Card
                key={option.id}
                className={`p-5 border-2 transition-all ${
                  voted === option.id
                    ? "bg-accent border-accent"
                    : "bg-card hover:border-primary cursor-pointer"
                }`}
                onClick={() => handleVote(option.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ThumbsUp
                      className={`h-8 w-8 ${
                        voted === option.id
                          ? "text-accent-foreground"
                          : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <p className="text-2xl font-semibold">{option.title}</p>
                      <p className="text-lg text-muted-foreground mt-1">
                        {option.votes} คะแนน
                      </p>
                    </div>
                  </div>
                  {voted === option.id && (
                    <span className="text-xl font-bold text-accent-foreground">
                      ✓
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivityDetail;
