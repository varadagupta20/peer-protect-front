import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-dotted border-2 border-[#3d4fab] p-4 mb-4 rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium text-[#3d4fab]">{question}</h2>
        <span className="text-[#3d4fab]">{isOpen ? '▴' : '▾'}</span>
      </div>
      {isOpen && <div className="mt-2 text-[#2d6a99]">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What is PeerProctect ?",
      answer:
        "PeerProctect is a decentralized model where individuals form insurance pools with others who share similar risks. Using blockchain technology, these pools manage their own coverage, claims, and premium distribution without traditional insurance intermediaries. This approach enhances transparency, reduces costs, and allows for community-driven decision-making.",
    },
    {
      question: "How do I join a PeerProctect pool?",
      answer:
        "To join a PeerProctect pool, you need to find or create a pool that aligns with your coverage needs. You can join existing pools or initiate one based on shared interests or risks. Once a pool is formed, members contribute to the pool, agree on coverage terms, and participate in the governance of the pool through voting on key decisions.",
    },
    {
      question: "What are the benefits of PeerProctect over traditional insurance?",
      answer: (
        <div>
          <p>PeerProctect offers several benefits compared to traditional insurance models:</p>
          <ul className="list-disc pl-5">
            <li><strong>Lower Premiums:</strong> By eliminating intermediaries and leveraging community management, overall costs are reduced.</li>
            <li><strong>Transparency:</strong> Blockchain technology ensures that all transactions and decisions are recorded transparently and immutably.</li>
            <li><strong>Community Control:</strong> Members have direct input in managing the pool, including coverage terms and claims processing.</li>
            <li><strong>Customizable Coverage:</strong> Policies can be tailored to specific needs, providing flexible and dynamic insurance solutions.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How are claims processed in a PeerProctect pool?",
      answer:
        "Claims in a PeerProctect pool are processed through smart contracts on the blockchain. When a claim is submitted, it is evaluated based on predefined criteria. If the claim is valid, the smart contract automatically approves and disburses the payout to the claimant. This process is designed to be efficient, transparent, and free from traditional administrative delays.",
    },
    {
      question: "What happens to excess funds in a PeerProctect pool?",
      answer:
        "Excess funds in a PeerProctect pool, if any, can be managed in several ways. They may be redistributed among the members of the pool or rolled over to reduce future premiums. The exact handling of excess funds is usually determined by the pool’s governance decisions, which involve input and voting by the members.",
    },
    {
      question: "Can I create my own PeerProctect pool?",
      answer:
        "Yes, you can create your own PeerProctect pool. To do so, you would need to form a group of individuals with similar insurance needs, set up the pool with the desired coverage terms and premium rates, and manage the pool using blockchain technology for transparency and efficiency. Creating a pool involves defining the rules and conditions for membership, claims, and governance.",
    },
  ];

  return (
    <div id="faqs" className="flex flex-col md:flex-row items-start p-6 bg-white shadow-md rounded-lg">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <img src="/faq-or-frequently-asked-questions-for-website-blogger-helpdesk-clients-assistance-helpful-information-guides-background-illustration-vector.jpg" alt="FAQ" className="lg:mt-10 w-full h-150 rounded-lg" />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl font-bold text-center text-[#3d4fab] mb-6">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
