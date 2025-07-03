import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaMapMarkerAlt,
  FaChild,
  FaTshirt,
  FaHandsHelping,
  FaChurch,
  FaVideo,
} from "react-icons/fa";
import FAQItem from "../utils/faq-item";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const churchFAQs = [
    {
      question: "What time are your Sunday services?",
      answer:
        "Our Sunday services are held at 9:00 AM and 11:00 AM. Each service lasts about 75 minutes and includes worship, teaching, and prayer.",
      icon: FaClock, // react-icons/fa
    },
    {
      question: "Where are you located?",
      answer:
        "We are located at 123 Grace Avenue, Springfield. You can find detailed directions and parking info on our Contact page.",
      icon: FaMapMarkerAlt, // react-icons/fa
    },
    {
      question: "Do you have programs for kids and youth?",
      answer:
        "Yes! We offer fun and safe programs for children from infants through high school during all Sunday services.",
      icon: FaChild, // react-icons/fa
    },
    {
      question: "What should I wear?",
      answer:
        "Come as you are! Whether you're in jeans or more dressed up, you’ll feel right at home.",
      icon: FaTshirt, // react-icons/fa
    },
    {
      question: "How can I get involved or volunteer?",
      answer:
        "We’d love to have you join a team! Visit our Get Involved page to learn about opportunities and sign up.",
      icon: FaHandsHelping, // react-icons/fa
    },
    {
      question: "Is your church affiliated with a denomination?",
      answer:
        "We are a non-denominational Christian church that believes in the Bible and follows the teachings of Jesus Christ.",
      icon: FaChurch, // react-icons/fa
    },
    {
      question: "Do you stream services online?",
      answer:
        "Yes! You can watch our live services on our website or YouTube every Sunday at 11:00 AM.",
      icon: FaVideo, // react-icons/fa
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full gap-10 lg:gap-0 px-5 justify-between lg:px-20">
      <div className="flex flex-col h-full justify-center">
        <h1 className="mb-4 text-[22px] font-bitter font-semibold">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="mb-5 text-[14px]">
          Have questions? We’re here to help! Below are answers to some of the{" "}
          <br className="hidden md:block" />
          most common questions about our church, services, and how you can get{" "}
          <br className="hidden md:block" />
          involved. If you still need help, feel free to contact us directly!
        </p>
        <Link
          to="/contact-us"
          className="relative w-fit text-[14px] bg-primary py-2 px-8 rounded-full text-white"
        >
          Contact Us
        </Link>
      </div>
      <section id="faqs" className="w-full  h-full px-4 md:px-0">
        <div className="space-y-4">
          {churchFAQs.map((faq, i) => (
            <FAQItem
              key={i}
              isOpen={i === openIndex}
              onClick={() => toggleFAQ(i)}
              question={faq.question}
              answer={faq.answer}
              Icon={faq.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
