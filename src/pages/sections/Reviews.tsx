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
        className={`flex gap-8 bg-black/30 p-16 rounded-[64px] ${className}`}
        onAnimationEnd={onAnimationEnd}
      >
        <img
          src={review.image}
          width={144}
          height={144}
          alt={`${review.name} profile`}
          className="h-36 w-36 shrink-0 object-cover rounded-full"
        />
        <div className="flex flex-col gap-4 justify-center w-[720px]">
          <h1 className="text-4xl font-bold text-white code">
            {review.name}
          </h1>
          <p className="text-2xl text-white font-extralight">
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
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-16 items-center justify-center py-32">
          <h1 className="text-6xl font-bold text-[#008DDE] code">
            Reviews
          </h1>
          <div className="flex w-full items-center justify-between gap-16">
            <button
              type="button"
              aria-label="Previous review"
              className="cursor-pointer"
              onClick={() => changeReview("previous")}
            >
              <img
                src={left}
                width={64}
                height={64}
                alt=""
              />
            </button>
            <div className="relative h-[272px] w-[1024px] overflow-hidden rounded-[64px]">
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
              className="cursor-pointer"
              onClick={() => changeReview("next")}
            >
              <img
                src={right}
                width={64}
                height={64}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
