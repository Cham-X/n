import { reviews } from "../Constants/Index"
import ReviewCard from "../Components/ReviewCard"

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanqiun text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers</span> Says?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear geniune story from our satisfied customers about expectation and experience with us</p>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            imageUrl={review.imgURL}
          />
        ))}
      </div>
   </section>
  )
}

export default CustomerReview
