import React from 'react'
import './FAQs.css'
import questions from "./faq.json";
import Banner from "./banner";
import green from '../../images/white.jpg'

function FAQs() {
  return (
    <div className='faqs'>
      <img src={green} alt="" />
      <div className="faqs__container">
        <Banner>
            <Banner.Header>Frequently Asked Questions</Banner.Header>
            {questions.map((question) => (
                <Banner.Entity key={question.id}>
                <Banner.Question>{question.question}</Banner.Question>
                <Banner.Text>{question.answer}</Banner.Text>
                </Banner.Entity>
            ))}
            <h4>
                Question not on the list? Contact us.
            </h4>
        </Banner>
      </div>
    </div>
  )
}

export default FAQs