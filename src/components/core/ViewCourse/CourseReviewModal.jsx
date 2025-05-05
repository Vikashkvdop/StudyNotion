import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

import { createRating } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../../common/IconBtn";

export default function CourseReviewModal({ setReviewModal }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { courseEntireData } = useSelector((state) => state.viewCourse);

  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("courseExperience", "");
    setValue("courseRating", 0);
  }, [setValue]);

  const changeRating = (newRating) => {
    setRating(newRating);
    setValue("courseRating", newRating);
  };

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    );
    setReviewModal(false);
  };

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-[#07121b] bg-opacity-10 backdrop-blur-sm">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-gray-400 bg-gray-900">
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-gray-700 p-5">
          <p className="text-xl font-semibold text-gray-200">Add Review</p>
          <button onClick={() => setReviewModal(false)}>
            <RxCross2 className="text-2xl text-gray-200" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="flex items-center justify-center gap-x-4">
            <img
              src={user?.image}
              alt={`${user?.firstName} profile`}
              className="aspect-square w-[50px] rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-200">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-gray-200">Posting Publicly</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col items-center"
          >
            <StarRatings
              rating={rating}
              starRatedColor="#ffd700"
              changeRating={changeRating}
              numberOfStars={5}
              name="courseRating"
              starDimension="30px"
              starSpacing="5px"
            />

            <div className="flex w-11/12 flex-col space-y-2 mt-6">
              <label
                className="text-sm text-gray-200"
                htmlFor="courseExperience"
              >
                Add Your Experience <sup className="text-pink-400">*</sup>
              </label>
              <textarea
                id="courseExperience"
                placeholder="Add Your Experience"
                {...register("courseExperience", { required: true })}
                className="form-style resize-none min-h-[130px] w-full"
              />
              {errors.courseExperience && (
                <span className="ml-2 text-xs tracking-wide text-pink-400">
                  Please Add Your Experience
                </span>
              )}
            </div>

            <div className="mt-6 flex w-11/12 justify-end gap-x-2">
              <button
                type="button"
                onClick={() => setReviewModal(false)}
                className="flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 py-[8px] px-[20px] font-semibold text-gray-900"
              >
                Cancel
              </button>
              <IconBtn text="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
