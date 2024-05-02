import { Images } from "@src/constants/assetsUrls";
import Image from "next/image";
import React from "react";

interface TestimonialsProps {
  title?: string;
  designation?: string;
  description?: string;
  avatar: string;
}

interface TestimonialsCardProps {
  data: TestimonialsProps;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  data,
}: TestimonialsCardProps) => {
  return (
    <div className="w-[80%]  mb-14 p-16 rounded-[18px] shadow-box m-2 bg-white">
      <div className="flex items-center">
        <Image src={data.avatar} alt="" width={102} height={102} />
        <div>
          <h4>{data.title}</h4>
          <p className="text-textColor">{data.designation}</p>
        </div>
      </div>
      <div>
        <p>{data.description}</p>
        <span className="font-bold flex justify-end gap-2">
          {" "}
          <Image src={Images.star} alt="" width={20} height={20} />
          4.7
        </span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
