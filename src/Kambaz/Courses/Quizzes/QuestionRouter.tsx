import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as questionClient from "./Questions/client";
import MultipleChoiceEditor from "./Questions/MCQ_Question";
import TrueFalseEditor from "./Questions/TF_Question";
import FillInTheBlankEditor from "./Questions/FITB_Question";

export default function QuestionRouter() {
  const { type, qid, questionId } = useParams();
  const [question, setQuestion] = useState<any>(null);
  const [resolvedType, setResolvedType] = useState<string | undefined>(type);

  useEffect(() => {
    const load = async () => {
      if (qid && questionId && questionId !== "new") {
        const q = await questionClient.findQuestionById(qid, questionId);
        setQuestion(q);
        setResolvedType(q.type);  // Set based on loaded question
      }
    };
    load();
  }, [qid, questionId]);

  if (questionId !== "new" && (!question || !resolvedType)) {
    return <div>Loading...</div>;
  }

  switch (resolvedType) {
    case "mcq":
      return <MultipleChoiceEditor />;
    case "tf":
      return <TrueFalseEditor />;
    case "fitb":
      return <FillInTheBlankEditor />;
    default:
      return <div>Invalid question type: {resolvedType}</div>;
  }
}


// import { useParams } from "react-router-dom";
// import MultipleChoiceEditor from "./Questions/MCQ_Question";
// import TrueFalseEditor from "./Questions/TF_Question";
// import FillInTheBlankEditor from "./Questions/FITB_Question";

// export default function QuestionRouter() {
//   const { type } = useParams();
//   console.log("ROUTING TO TYPE:", type);

//   switch (type) {
//     case "mcq":
//       return <MultipleChoiceEditor />;
//     case "tf":
//         console.log("Rendering <TrueFalseEditor />");
//         return <TrueFalseEditor />;
//     case "fitb":
//           console.log("Rendering <FillInTheBlankEditor />");

//       return <FillInTheBlankEditor />;
//     // case "fitb":
//     //   return <FillInTheBlankEditor />;
//     default:
//       return <div>Not a valid question type</div>;
//   }
// }
