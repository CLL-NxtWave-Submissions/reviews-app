import {Component} from 'react'
import './index.css'

export default class ReviewsCarousel extends Component {
  state = {
    carouselReviewItemId: 0, // index/id of first review item
  }

  onLeftCarouselControlClick = () => {
    this.setState(previousCarouselState => {
      const {carouselReviewItemId} = previousCarouselState

      if (carouselReviewItemId > 0) {
        return {carouselReviewItemId: carouselReviewItemId - 1}
      }

      return {carouselReviewItemId}
    })
  }

  onRightCarouselControlClick = () => {
    this.setState(previousCarouselState => {
      const {carouselReviewItemId} = previousCarouselState

      const {reviewsList} = this.props
      const reviewsListLength = reviewsList.length

      if (carouselReviewItemId < reviewsListLength - 1) {
        return {
          carouselReviewItemId: carouselReviewItemId + 1,
        }
      }

      return {carouselReviewItemId}
    })
  }

  getCarouselReviewItem = currentCarouselReviewItemIndex => {
    const {reviewsList} = this.props

    return reviewsList[currentCarouselReviewItemIndex]
  }

  render() {
    const {carouselReviewItemId} = this.state
    const currentReviewItem = this.getCarouselReviewItem(carouselReviewItemId)
    const {imgUrl, username, companyName, description} = currentReviewItem

    return (
      <div className="reviews-bg-container">
        <div className="reviews-content-container">
          <h1 className="reviews-header">Reviews</h1>
          <div className="reviews-carousel-container">
            <button
              type="button"
              className="carousel-control-button"
              onClick={this.onLeftCarouselControlClick}
            >
              <img
                className="carousel-control-button-image"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <div className="review-item-container">
              <img
                className="review-profile-image"
                src={imgUrl}
                alt={username}
              />
              <p className="review-author-name">{username}</p>
              <p className="review-company-name">{companyName}</p>
              <p className="review-description">{description}</p>
            </div>

            <button
              type="button"
              className="carousel-control-button"
              onClick={this.onRightCarouselControlClick}
            >
              <img
                className="carousel-control-button-image"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
