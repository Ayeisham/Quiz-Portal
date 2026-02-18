const StudentAttempt = require("../models/studentAttempt");

const submitExam = async (attemptId, answers) => {
  let score = 0;

  const attempt = await StudentAttempt.findByPk(attemptId, {
    include: [
      {
        association: "examSession",
        include: [
          {
            association: "papersession",
            include: [
              {
                association: "questions",
                include: [
                  {
                    association: "options",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  if (!attempt) {
    throw new Error("Attempt not found");
  }

  const questions = attempt.examSession.papersession.questions;

  // Loop through each question
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    // Find student's answer for this question
    let studentAnswer = null;

    for (let j = 0; j < answers.length; j++) {
      if (answers[j].questionId === question.id) {
        studentAnswer = answers[j];
        break;
      }
    }

    if (!studentAnswer) {
      continue;
    }

    let correctCount = 0;
    let matchedCorrect = 0;

    // Count correct options
    for (let k = 0; k < question.options.length; k++) {
      if (question.options[k].isCorrect === true) {
        correctCount++;

        // Check if student selected this correct option
        for (let m = 0; m < studentAnswer.selectedOptionIds.length; m++) {
          if (studentAnswer.selectedOptionIds[m] === question.options[k].id) {
            matchedCorrect++;
          }
        }
      }
    }

    // If student selected exact correct answers
    if (
      correctCount === studentAnswer.selectedOptionIds.length &&
      matchedCorrect === correctCount
    ) {
      score = score + 1;
    }
  }

  await attempt.update({ score: score });

  return {
    totalQuestions: questions.length,
    correctAnswers: score,
    finalScore: score,
  };
};

module.exports = { submitExam };
