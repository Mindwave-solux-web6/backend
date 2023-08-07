import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import image from "../asset/body.png";

import "./teststyle.css";

const qnaList = [
  {
    q: "1. 날 떠나버릴지도 모른다는 두려움에 사람들에게 매달린다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [0] },
      { answer: 5, type: [0] },
      { answer: 6, type: [0] },
    ],
  },
  {
    q: "2. 날 사랑하는 사람이 다른 사람을 더 좋아하게 되어 나를 떠날까봐 굉장히 걱정한다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [0] },
      { answer: 5, type: [0] },
      { answer: 6, type: [0] },
    ],
  },
  {
    q: "3. 사람들의 궁극적인 목적이 무엇인지 경계하는 편이다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [1] },
      { answer: 5, type: [1] },
      { answer: 6, type: [1] },
    ],
  },
  {
    q: "4. 사람들이 나를 해치지 않을까 하는 걱정에 경계를 늦출 수가 없다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [1] },
      { answer: 5, type: [1] },
      { answer: 6, type: [1] },
    ],
  },
  {
    q: "5. 보통 사람들 보다 병에 걸리거나 다른 나쁜 일이 내게 닥칠까봐 더 많이 걱정하는 편이다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [2] },
      { answer: 5, type: [2] },
      { answer: 6, type: [2] },
    ],
  },
  {
    q: "6. 파산해서 거지가 되거나 남에게 의탁하게 될까 봐 걱정한다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [2] },
      { answer: 5, type: [2] },
      { answer: 6, type: [2] },
    ],
  },
  {
    q: "7. 살아가는 동안 혼자 힘으로 난관을 극복해 나갈 수 가 없기에 도움을 줄 사람이 필요하다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [3] },
      { answer: 5, type: [3] },
      { answer: 6, type: [3] },
    ],
  },
  {
    q: "8. 부모님과 나는 서로의 사생활에 지나치게 관여하는 경향이 있다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [3] },
      { answer: 5, type: [3] },
      { answer: 6, type: [3] },
    ],
  },
  {
    q: "9. 나를 돌봐주거나 나와 마음을 나누거나 내게 일어나는 일에 대해 깊이 염려해줄 사람이 없었다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [4] },
      { answer: 5, type: [4] },
      { answer: 6, type: [4] },
    ],
  },
  {
    q: "10. 이해와 공감, 지도, 충고, 지지에 대한 나의 정서적 욕구를 사람들이 만족시켜 준 적이 없다.  ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [4] },
      { answer: 5, type: [4] },
      { answer: 6, type: [4] },
    ],
  },
  {
    q: "11. 나는 소속감이 없다. 나는 남들과 다르고 어디에도 어울리지 않는다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [5] },
      { answer: 5, type: [5] },
      { answer: 6, type: [5] },
    ],
  },
  {
    q: "12. 나는 따분하고 싫증나는 사람이다. 사교적인 자리에서 어떻게 이야기해야 할지 모르겠다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [5] },
      { answer: 5, type: [5] },
      { answer: 6, type: [5] },
    ],
  },
  {
    q: "13. 내가 원하는 사람이 나의 모든 진실을 알게 되면 나를 사랑할 수 없을 것이다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [6] },
      { answer: 5, type: [6] },
      { answer: 6, type: [6] },
    ],
  },

  {
    q: "14. 나는 다른 사람들의 사랑과 관심, 존경을 받을 가치가 없다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [6] },
      { answer: 5, type: [6] },
      { answer: 6, type: [6] },
    ],
  },
  {
    q: "15. 나는 일(학업)에 있어서 남들보다 능력이 없다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [7] },
      { answer: 5, type: [7] },
      { answer: 6, type: [7] },
    ],
  },
  {
    q: "16. 남들보다 재능이나 지적능력, 경력이 모자라기 때문에 나는 이 자리에 어울리지 않는다고 느낀다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [7] },
      { answer: 5, type: [7] },
      { answer: 6, type: [7] },
    ],
  },
  {
    q: "17. 다른 사람들이 원하는 걸 내가 해주지 않으면 사람들은 나에게 어떤 방식으로든 보복하거나 나를 거부할 것이다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [8] },
      { answer: 5, type: [8] },
      { answer: 6, type: [8] },
    ],
  },
  {
    q: "18. 사람들은 내가 남들만을 위하고 자신을 위할줄 모른다고 생각한다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [8] },
      { answer: 5, type: [8] },
      { answer: 6, type: [8] },
    ],
  },
  {
    q: "19. 나는 최선을 다한다. 적당한 수준에 만족할 수 없다.  ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [9] },
      { answer: 5, type: [9] },
      { answer: 6, type: [9] },
    ],
  },
  {
    q: "20. 나는 할 일이 너무 많아서 쉬거나 즐길 시간이 없다. ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [9] },
      { answer: 5, type: [9] },
      { answer: 6, type: [9] },
    ],
  },
  {
    q: "21. 다른 사람이 지키는 정상적인 규칙이나 관례를 따를 필요는 없다.  ",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [10] },
      { answer: 5, type: [10] },
      { answer: 6, type: [10] },
    ],
  },
  {
    q: "22. 나는 일상적이고 지루한 일들을 완수해 내거나 내가 내 감정을 조절하는 습관을 기르지 못했다.",
    a: [
      { answer: 1, type: null },
      { answer: 2, type: null },
      { answer: 3, type: null },
      { answer: 4, type: [10] },
      { answer: 5, type: [10] },
      { answer: 6, type: [10] },
    ],
  },
];

const infoList = [
  {
    prev: "제발 나를 떠나지 마세요",
    name: "버림받음의 덫",
    desc: "당신은 지금 사랑하는 사람이 자신을 떠나고, 자신은 영원히 정서적으로 고립되어 살게 될 것이라고 느끼고 있군요.",
  },
  {
    prev: "당신을 믿을 수 없어",
    name: "불신과 학대의 덫",
    desc: "당신은 지금 다른 사람들이 어떤 방법으로든 자신을 헤치거나 학대할 것이라고 예상하고 있군요.",
  },
  {
    prev: "언제 재난이 닥칠 지 몰라",
    name: "취약성의 덫",
    desc: "당신은 지금 자연재해, 범죄, 질병 경제적 파산 등이 닥칠 것이라는 두려움 속에 살고 있군요.",
  },
  {
    prev: "나 혼자서는 해낼 수 없어",
    name: "의존의 덫",
    desc: "당신은 지금 다른 사람의 세심한 도움 없이는 제대로 된 일상생활이 불가능하여 지속적인 지원을 원하고 있군요.",
  },
  {
    prev: "나는 결코 사랑받을 수 없을거야",
    name: "정서적 결핍의 덫",
    desc: "당신은 지금 자신의 사랑하고자하는 욕구가 절대로 타인에 의해 적절하게 충족되지 못할 것이라고 믿고 있군요.",
  },
  {
    prev: "나는 적합하지가 않아",
    name: "사회적 소외의 덫",
    desc: "당신은 지금 친구들과 집단의 관계에서 세상과 격리된, 남들과는 다르다는 느낌을 받고 있군요.",
  },
  {
    prev: "나는 쓸모 없는 사람이야",
    name: "결함의 덫",
    desc: "당신은 지금 내적으로 부족하고 결함이 있어서 자신은 근본적으로 사랑받을 수 없다고 믿고 있군요.",
  },
  {
    prev: "난 실패자인것 같아",
    name: "실패의 덫",
    desc: "당신은 학교, 직장, 운동 등 성취해야할 분야에서 자신은 부적합하다고 믿고 있군요.",
  },
  {
    prev: "당신이 원하는 대로 할게요",
    name: "복종의 덫",
    desc: "당신은 지금 다른 이들을 기쁘게 하거나 그들의 욕구를 만족시키기 위해 자신의 욕구와 욕망을 희생하고 있군요.",
  },
  {
    prev: "아직 많이 부족해",
    name: "엄격한 기준의 덫",
    desc: "당신은 지금 스스로가 정해놓은 지나치게 극단적으로 높은 기준에 맞추기 위해 가혹하게 노력하고 있군요.",
  },
  {
    prev: "내가 원하는 건 뭐든지 다 가질 수 있어",
    name: "특권 의식의 덫",
    desc: "당신은 지금 다른 이들이 고려하는 합리성, 실현가능성, 인내심 등을 모두 무시하고 자신이 특별하다고 느끼고 있군요.",
  },
];

// const QnaComponent = () => {
//   const endPoint = 22;
//   const [select, setSelect] = useState(Array(endPoint).fill(0));
//   const [qIdx, setQIdx] = useState(0);

//   const calResult = () => {
//     console.log("final select:", select);
//     const max = Math.max(...select);
//     const result = select.reduce((acc, cur, idx) => {
//       if (cur === max) acc.push(idx);
//       return acc;
//     }, []);
//     console.log("result", result);
//     return result;
//   };

//   const setResult = () => {
//     const point = calResult();
//     const resultName = document.querySelector(".resultname");
//     resultName.innerHTML = infoList[point].name;

//     const resultImg = document.createElement("img");
//     const imgDiv = document.querySelector("#resultImg");
//     const imgURL = `img/image-${point}.png`;
//     resultImg.src = imgURL;
//     resultImg.alt = point;
//     resultImg.classList.add("img-fluid");
//     imgDiv.appendChild(resultImg);

//     const resultDesc = document.querySelector(".resultDesc");
//     resultDesc.innerHTML = infoList[point].desc;
//   };

//   const goResult = () => {
//     const qna = document.querySelector("#qna");
//     const result = document.querySelector("#result");

//     qna.style.WebkitAnimation = "fadeOut 1s";
//     qna.style.animation = "fadeOut 1s";

//     setTimeout(() => {
//       result.style.WebkitAnimation = "fadeIn 1s";
//       result.style.animation = "fadeIn 1s";

//       setTimeout(() => {
//         qna.style.display = "none";
//         result.style.display = "block";
//       }, 450);
//       setResult();
//     }, 450);
//   };

//   const addAnswer = (answerText, qIdx, idx) => {
//     const answerClickHandler = () => {
//       const target = qnaList[qIdx].a[idx].type;
//       const updatedSelect = [...select];
//       if (target !== null) {
//         for (let i = 0; i < target.length; i++) {
//           updatedSelect[target[i]] += 1;
//         }
//       }
//       setSelect(updatedSelect);
//       console.log("Updated Select:", updatedSelect);
//       goNext(qIdx + 1);
//     };

//     return (
//       <button
//         className="answerList my-3 py-3 mx-auto fadeIn"
//         onClick={answerClickHandler}
//       >
//         {answerText}
//       </button>
//     );
//   };

//   const goNext = (qIdx) => {
//     if (qIdx === endPoint) {
//       goResult();
//       return;
//     }

//     const q = document.querySelector(".qBox");
//     q.innerHTML = qnaList[qIdx].q;

//     // Use map to render each answer with the AnswerComponent
//     const answers = qnaList[qIdx].a.map((answer, idx) => (
//       <AnswerComponent
//         key={idx}
//         answerText={answer.answer}
//         qIdx={qIdx}
//         idx={idx}
//       />
//     ));

//      const rootElement = document.querySelector(".answerBox");
//     const root = createRoot(rootElement);
//     root.render(answers);

//     const status = document.querySelector(".statusBar");
//     status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

//     setQIdx(qIdx);
//   };

//   const AnswerComponent = ({ answerText, qIdx, idx }) => {
//     return addAnswer(answerText, qIdx, idx);
//   };

//   const begin = () => {
//     const main = document.querySelector("#main");
//     const qna = document.querySelector("#qna");

//     main.style.WebkitAnimation = "fadeOut 1s";
//     main.style.animation = "fadeOut 1s";

//     setTimeout(() => {
//       qna.style.WebkitAnimation = "fadeIn 1s";
//       qna.style.animation = "fadeIn 1s";

//       setTimeout(() => {
//         main.style.display = "none";
//         qna.style.display = "block";
//       }, 450);

//       goNext(0);
//     }, 450);
//   };

const QnaComponent = () => {
  const endPoint = 22;
  const [select, setSelect] = useState(Array(endPoint).fill(0));
  const [qIdx, setQIdx] = useState(0);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  // const calResult = () => {
  //   console.log("final select:", select);
  //   const max = Math.max(...select);
  //   const result = select.reduce((acc, cur, idx) => {
  //     if (cur === max) acc.push(idx);
  //     return acc;
  //   }, []);
  //   console.log("result", result);
  //   return result;
  // };

  const calResult = () => {
    console.log("final select:", select);
    const max = Math.max(...select);
    const maxIndices = select.reduce((acc, cur, idx) => {
      if (cur === max) acc.push(idx);
      return acc;
    }, []);

    const getRandomIndices = (arr, n) => {
      let result = new Array(n);
      let len = arr.length;
      let taken = new Array(len);

      if (n > len) {
        throw new RangeError(
          console.log("getRandomIndices: more elements taken than available",n,len)
        );
      }

      while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    };

    const randomResult = getRandomIndices(maxIndices, 3);
    console.log("result", randomResult);

    return randomResult;
  };
  
  const sendResultToServer = async (resultIndices) => {
    const resultNames = resultIndices.map((index) => infoList[index].name);
    const trap_1=resultNames[0];
    const trap_2=resultNames[1];
    const trap_3=resultNames[2];
    
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/test",
      { 
        trap_1,
        trap_2,
        trap_3
      });
      console.log("덫 결과 전송 완료", response,trap_1,trap_2,trap_3);
    } catch (error) {
      console.error("덫 결과 전송 오류", error);
    }
  };

  const setResult = () => {
    const points = calResult();
    sendResultToServer(points);
    const resultContainer = document.querySelector("#result");
    resultContainer.innerHTML = ""; // 기존 결과를 비웁니다.

    points.forEach((point) => {
      if (infoList[point]) {
        const resultSection = document.createElement("div");

        const resultPrev = document.createElement("div");
        resultPrev.innerHTML = infoList[point].prev;
        resultSection.appendChild(resultPrev);

        const resultName = document.createElement("h3");
        resultName.innerHTML = `&lt;${infoList[point].name}&gt;`;
        resultSection.appendChild(resultName);

        // const resultImg = document.createElement("img");
        // const imgURL = `img/image-${point}.png`;
        // resultImg.src = imgURL;
        // resultImg.alt = point;
        // resultImg.classList.add("img-fluid");
        // resultSection.appendChild(resultImg);

        const resultDesc = document.createElement("p");
        resultDesc.innerHTML = infoList[point].desc;
        resultSection.appendChild(resultDesc);

        const resulthr = document.createElement("hr");
        resultSection.appendChild(resulthr);

        resultContainer.appendChild(resultSection);
      } else {
        // 적절한 오류 처리
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "알 수 없는 결과";
        resultContainer.appendChild(errorMessage);
      }
    });
  };

  const goResult = () => {
    const qna = document.querySelector("#qna");
    const result = document.querySelector("#result");

    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";

      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
      }, 450);
      setResult();
    }, 450);
  };

  useEffect(() => {
    if (qIdx === endPoint) {
      goResult();
    } else {
      const q = qnaList[qIdx].q;
      const answerElements = qnaList[qIdx].a.map((answer, idx) =>
        addAnswer(answer.answer, qIdx, idx)
      );

      setQuestion(q);
      setAnswers(answerElements);
      const status = document.querySelector(".statusBar");
      status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;
    }
  }, [qIdx]);

  const addAnswer = (answerText, qIdx, idx) => {
    const handleClick = () => {
      const target = qnaList[qIdx].a[idx].type;
      const updatedSelect = [...select];
      if (target !== null) {
        for (let i = 0; i < target.length; i++) {
          updatedSelect[target[i]] += 1;
        }
      }
      setSelect(updatedSelect);
      console.log("Updated Select:", updatedSelect);

      goNext(qIdx + 1);
    };

    return (
      <button
        key={idx}
        className="answerList my-3 py-3 mbutton mx-auto fadeIn"
        onClick={handleClick}
      >
        {answerText}
      </button>
    );
  };

  const goNext = (qIdx) => {
    if (qIdx === endPoint) {
      goResult();
      return;
    }

    const q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    const answerElements = qnaList[qIdx].a.map((answer, idx) =>
      addAnswer(answer.answer, qIdx, idx)
    );

    const status = document.querySelector(".statusBar");
    status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

    setQIdx(qIdx);
    return answerElements;
  };

  // const addAnswer = (answerText, qIdx, idx) => {
  //   const a = document.querySelector(".answerBox");
  //   const answer = document.createElement("button");
  //   answer.classList.add("answerList");
  //   answer.classList.add("my-3");
  //   answer.classList.add("py-3");
  //   answer.classList.add("mx-auto");
  //   answer.classList.add("fadeIn");

  //   a.appendChild(answer);
  //   answer.innerHTML = answerText;

  //   answer.addEventListener(
  //     "click",
  //     () => {
  //       const children = document.querySelectorAll(".answerList");
  //       for (let i = 0; i < children.length; i++) {
  //         children[i].disabled = true;
  //         children[i].style.WebkitAnimation = "fadeOut 0.5s";
  //         children[i].style.animation = "fadeOut 0.5s";
  //       }
  //       setTimeout(() => {
  //         const target = qnaList[qIdx].a[idx].type;
  //         const updatedSelect = [...select];
  //         if (target !== null) {
  //           for (let i = 0; i < target.length; i++) {
  //             updatedSelect[target[i]] += 1;
  //           }
  //         }
  //         setSelect(updatedSelect);
  //         console.log("Updated Select:", updatedSelect);
  //         for (let i = 0; i < children.length; i++) {
  //           children[i].style.display = "none";
  //         }
  //         goNext(qIdx + 1);
  //       }, 450);
  //     },
  //     false
  //   );
  // };

  // const goNext = (qIdx) => {
  //   if (qIdx === endPoint) {
  //     goResult();
  //     return;
  //   }

  //   const q = document.querySelector(".qBox");
  //   q.innerHTML = qnaList[qIdx].q;
  //   for (let i in qnaList[qIdx].a) {
  //     addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  //   }
  //   const status = document.querySelector(".statusBar");
  //   status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

  //   setQIdx(qIdx);
  // };

  const begin = () => {
    const main = document.querySelector("#main");
    const qna = document.querySelector("#qna");

    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";

      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
      }, 450);

      goNext(0);
    }, 450);
  };

  return (
    <header className="masthead" style={{ height: "60%" }}>
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          {/* 초기 화면 section */}
          <section id="main" className="qna-section bg-transparent text-white">
            <h1
              className="text-white font-weight-bold"
              style={{ fontSize: "30px" }}
            >
              내 마음 속 "덫" 찾기
            </h1>
            <hr className="qna-divider-light" />
            <div className="alt my-5 py-4 mx-auto">
              <p className="text-white danger">&lt;&lt;유의사항&gt;&gt;</p>
              <p className="text-white">
                ※ 어린 시절과 현재 중 모두에 해당하는 항목이 있다면
                <br />
                <span className="fw-boldline">둘 중 더 높은 수치</span>로 선택해
                주시길 바랍니다.
              </p>
              <p className="text-white">
                ※{" "}
                <span className="fw-boldline">
                  테스트 항목 간의 이동이 불가능
                </span>
                합니다.
                <br />
                천천히 지문을 읽고 신중하게 선택해 주시길 바랍니다.
              </p>
              <p className="text-white">
                ※ <span className="fw-boldline">총 22 항목</span>으로 구성되어
                있으며,
                <br />
                소요시간은 약 2분입니다.
              </p>
              <p className="text-white">
                ※ 선택 항목은 <span className="fw-boldline2">1점에서 6점</span>
                으로 구성되어 있습니다.
                <br />
                주어진 질문과 내 특성이 완전히 다른 경우는{" "}
                <span className="fw-boldline3">1점</span>,
                <br />
                완전히 일치하는 경우는 <span className="fw-boldline3">6점</span>
                입니다.
                <br />
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-xl"
              onClick={begin}
            >
              시작하기
            </button>
          </section>

          {/* 설문지 section */}
          <section id="qna">
            <div className="qBox py-3 mt-4 mx-auto">{question}</div>
            <div className="mx-auto mb-3 mt-7 text-white">
              ※ 지문의 설명과 나의 특성이{" "}
              <span className="fw-boldline2">일치할수록 큰 숫자</span>로
              응답해주시길 바랍니다.
            </div>
            <div className="answerBox">{answers}</div>
            <div className="status mx-auto mt-7">
              <div className="statusBar"></div>
            </div>
          </section>

          {/* 결과 section */}

          <section id="result" className="mx-auto my-5 py-5 px-3">
            <h1>당신의 마음속 덫은?</h1>
            <div className="resultname"></div>
            <div
              id="resultImg"
              className="my-3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto"
            ></div>
            <div className="resultDesc"></div>
            <div className="resulthr"></div>
            <button
              type="button"
              className="kakao mt-3 py-2 px-3"
              //   onClick={/* Your share function */ }
            >
              공유하기
            </button>
          </section>
        </div>
      </div>
    </header>
  );
};

export default QnaComponent;
