import { useState } from "react";
import left from "../../assets/icons/chevron-left.svg";
import right from "../../assets/icons/chevron-right.svg";
import jamie from "../../assets/reviews/review-1.jpg";
import alex from "../../assets/reviews/review-2.jpg";
import taylor from "../../assets/reviews/review-3.jpg";

const reviews = [
  {
    name: "Jamie Chen",
    testimonial: "Reliable, detail-oriented, and easy to collaborate with from concept to launch.",
    image: jamie,
  },
  {
    name: "Alex Morgan",
    testimonial: "A thoughtful developer who turns loose ideas into clean, usable interfaces.",
    image: alex,
  },
  {
    name: "Taylor Smith",
    testimonial: "Brings strong frontend instincts and a calm, practical approach to problem solving.",
    image: taylor,
  },
];

type SlideDirection = "previous" | "next";

type ReviewTransition = {
  fromIndex: number;
  toIndex: number;
  direction: SlideDirection;
};

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewTransition, setReviewTransition] = useState<ReviewTransition | null>(null);
  const currentReview = reviews[currentReviewIndex];

  const changeReview = (direction: SlideDirection) => {
    if (reviewTransition) {
      return;
    }

    const nextIndex =
      direction === "next"
        ? currentReviewIndex === reviews.length - 1
          ? 0
          : currentReviewIndex + 1
        : currentReviewIndex === 0
          ? reviews.length - 1
          : currentReviewIndex - 1;

    setReviewTransition({
      fromIndex: currentReviewIndex,
      toIndex: nextIndex,
      direction,
    });
  };

  const finishTransition = () => {
    if (!reviewTransition) {
      return;
    }

    setCurrentReviewIndex(reviewTransition.toIndex);
    setReviewTransition(null);
  };

  const renderReviewCard = (
    review: (typeof reviews)[number],
    className = "",
    onAnimationEnd?: () => void
  ) => {
    return (
      <div
        className={`flex flex-col items-center gap-6 bg-black/30 p-6 text-center rounded-3xl sm:flex-row sm:gap-8 sm:p-10 sm:text-left lg:p-16 lg:rounded-[64px] ${className}`}
        onAnimationEnd={onAnimationEnd}
      >
        <img
          src={review.image}
          width={144}
          height={144}
          alt={`${review.name} profile`}
          className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-32 sm:w-32 lg:h-36 lg:w-36"
        />
        <div className="flex min-w-0 flex-col gap-4 justify-center sm:flex-1">
          <h1 className="text-2xl font-bold text-white code sm:text-3xl lg:text-4xl">
            {review.name}
          </h1>
          <p className="text-base text-white font-extralight sm:text-xl lg:text-2xl">
            {review.testimonial}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #111827 100%)' }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 items-center justify-center py-20 sm:py-24 lg:gap-16 lg:py-32">
          <h1 className="text-center text-4xl font-bold text-[#008DDE] code sm:text-5xl lg:text-6xl">
            Reviews
          </h1>
          <div className="flex w-full items-center justify-between gap-3 sm:gap-6 lg:gap-16">
            <button
              type="button"
              aria-label="Previous review"
              className="shrink-0 cursor-pointer"
              onClick={() => changeReview("previous")}
            >
              <img
                src={left}
                width={64}
                height={64}
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                alt=""
              />
            </button>
            <div className="relative h-[360px] min-w-0 flex-1 overflow-hidden rounded-3xl sm:h-[256px] lg:h-[272px] lg:rounded-[64px]">
              {reviewTransition ? (
                <>
                  {renderReviewCard(
                    reviews[reviewTransition.fromIndex],
                    `absolute inset-0 ${
                      reviewTransition.direction === "next"
                        ? "review-slide-exit-left"
                        : "review-slide-exit-right"
                    }`
                  )}
                  {renderReviewCard(
                    reviews[reviewTransition.toIndex],
                    `absolute inset-0 ${
                      reviewTransition.direction === "next"
                        ? "review-slide-enter-right"
                        : "review-slide-enter-left"
                    }`,
                    finishTransition
                  )}
                </>
              ) : (
                renderReviewCard(currentReview, "absolute inset-0")
              )}
            </div>
            <button
              type="button"
              aria-label="Next review"
              className="shrink-0 cursor-pointer"
              onClick={() => changeReview("next")}
            >
              <img
                src={right}
                width={64}
                height={64}
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
