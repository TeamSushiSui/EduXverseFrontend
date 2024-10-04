import { useState } from 'react';
import { BlockchainQuizImg, BookMarkFolder } from '../../Components';
import './Quiz.css';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false); 
    // const data = `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button  class='next-btn'}><a>Start Course</a></button>`
    const edxCourses = [
      {
        id: 1,
        courses: [
          `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button class='next-btn'}>Start Course</button>`,
          `<h2>What is Blockchain?</h2><p>Imagine you have a notebook where you write down everything you do each day. Now, imagine that this notebook is shared with everyone in your class, and once you write something in it, it can’t be changed or erased. That’s kind of how a blockchain works!</p><button  class='next-btn'}>Next</button>`,
          `<h2>Key features of the blockchain</h2><ol><li>Decentralization:<ul><li>No Central Authority: Instead of having one person or company in charge, everyone in the network has a copy of the notebook. This means no single person can control or change the information.</li><li>Peer-to-Peer Network: All the computers (or nodes) in the network are connected directly to each other, like a group chat where everyone can see and send messages.</li></ul></li><li>Transparency:<ul><li>Public Ledger: Everyone can see the transactions recorded in the blockchain. It’s like having a public scoreboard where everyone can see the scores.</li><li>Immutable Records: Once something is written in the blockchain, it can’t be changed. This ensures that the information is accurate and trustworthy.</li></ul></li><li>Security:<ul><li>Cryptography: Blockchain uses complex math (cryptography) to secure the information. It’s like having a secret code that only the intended recipient can understand.</li><li>Consensus Mechanisms: Before adding a new entry to the blockchain, all the nodes in the network must agree that it’s valid. This process is called consensus.</li></ul></li></ol><button  class='next-btn'}>Next</button>`,
          `<h2>How Does Blockchain Work?</h2><ol><li>Transaction: Imagine you want to send some digital money (like Bitcoin) to a friend. You create a transaction and broadcast it to the network.</li><li>Verification: The nodes in the network check if the transaction is valid. They make sure you have enough money to send and that you’re the rightful owner.</li><li>Block Creation: Once verified, the transaction is grouped with other transactions to form a block. This block is then added to the chain of previous blocks (hence the name blockchain).</li><li>Consensus: The network uses a consensus mechanism (like Proof of Work or Proof of Stake) to agree on the new block. Once agreed, the block is added to the blockchain, and the transaction is complete.</li></ol><button  class='next-btn'}>Next</button>`,
          `<h2>Why is Blockchain Important?</h2><ul><li>Trust: Because the information is transparent and can’t be changed, people can trust that it’s accurate.</li><li>Security: The use of cryptography and consensus mechanisms makes blockchain very secure.</li><li>Decentralization: Without a central authority, blockchain can be more democratic and resistant to censorship.</li></ul><button  class='next-btn'}>Next</button>`,
          `<h2>Real-World Applications (RWAs)</h2><ul><li>Cryptocurrencies: Digital money like Bitcoin and Ethereum use blockchain technology.</li><li>Supply Chain: Companies can track products from the factory to the store, ensuring they are genuine and not tampered with.</li><li>Voting: Blockchain can be used to create secure and transparent voting systems.</li></ul><button  class='next-btn'}>Next</button>`,
          `<h2>Let’s wrap things up</h2><p>So, that’s the brief fundamentals ofblockchain techmology in a nutshell! It’s all about understanding the basics of what blockchain is, how it works, and why it’s important.</p><button  class='next-btn'}>Finish</button>`,
          `<h2>Do you want to take a quiz?</h2><button  class='next-btn'}>Yes</button><button  class='next-btn'}>No</button>`,
        ],
        quizQuestions: [
          `<h2>1. What is a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A decentralized digital ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A centralized database</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of computer network</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>2. Which of the following is a key feature of blockchain technology?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>Centralized control</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Immutability</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>High transaction fees</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Limited scalability</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>3. What is the primary purpose of a consensus mechanism in a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>To increase transaction speed</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To ensure all participants agree on the state of the ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To reduce the cost of transactions</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To centralize control of the network</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>4. Which of the following best describes a smart contract?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p> A legal agreement between two parties</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A self-executing contract with the terms directly written into code</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A traditional paper contract</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><button class='next-btn'}>Finish</button>`,
          `<img src='../../Assets/BookMarkFolder.png' alt="Folder Pics" /><h2>Congratulations!</h2><p>You got 4 out of 4 right.</p><p>You've been rewarded</p><p><b>10 EDX</b></p></button><button  class='next-btn'}>Claim</button><a href='/'><button  class='next-btn'}>Continue Learning</button></a>`
        ],
      },
      {
        id: 1,
        courses: [
          `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button class='next-btn'}>Start Course</button>`,
          `<h2>What is Blockchain?</h2><p>Imagine you have a notebook where you write down everything you do each day. Now, imagine that this notebook is shared with everyone in your class, and once you write something in it, it can’t be changed or erased. That’s kind of how a blockchain works!</p><button  class='next-btn'}>Next</button>`,
          `<h2>Key features of the blockchain</h2><ol><li>Decentralization:<ul><li>No Central Authority: Instead of having one person or company in charge, everyone in the network has a copy of the notebook. This means no single person can control or change the information.</li><li>Peer-to-Peer Network: All the computers (or nodes) in the network are connected directly to each other, like a group chat where everyone can see and send messages.</li></ul></li><li>Transparency:<ul><li>Public Ledger: Everyone can see the transactions recorded in the blockchain. It’s like having a public scoreboard where everyone can see the scores.</li><li>Immutable Records: Once something is written in the blockchain, it can’t be changed. This ensures that the information is accurate and trustworthy.</li></ul></li><li>Security:<ul><li>Cryptography: Blockchain uses complex math (cryptography) to secure the information. It’s like having a secret code that only the intended recipient can understand.</li><li>Consensus Mechanisms: Before adding a new entry to the blockchain, all the nodes in the network must agree that it’s valid. This process is called consensus.</li></ul></li></ol><button  class='next-btn'}>Next</button>`,
          `<h2>How Does Blockchain Work?</h2><ol><li>Transaction: Imagine you want to send some digital money (like Bitcoin) to a friend. You create a transaction and broadcast it to the network.</li><li>Verification: The nodes in the network check if the transaction is valid. They make sure you have enough money to send and that you’re the rightful owner.</li><li>Block Creation: Once verified, the transaction is grouped with other transactions to form a block. This block is then added to the chain of previous blocks (hence the name blockchain).</li><li>Consensus: The network uses a consensus mechanism (like Proof of Work or Proof of Stake) to agree on the new block. Once agreed, the block is added to the blockchain, and the transaction is complete.</li></ol><button  class='next-btn'}>Next</button>`,
          `<h2>Why is Blockchain Important?</h2><ul><li>Trust: Because the information is transparent and can’t be changed, people can trust that it’s accurate.</li><li>Security: The use of cryptography and consensus mechanisms makes blockchain very secure.</li><li>Decentralization: Without a central authority, blockchain can be more democratic and resistant to censorship.</li></ul><button  class='next-btn'}>Next</button>`,
          `<h2>Real-World Applications (RWAs)</h2><ul><li>Cryptocurrencies: Digital money like Bitcoin and Ethereum use blockchain technology.</li><li>Supply Chain: Companies can track products from the factory to the store, ensuring they are genuine and not tampered with.</li><li>Voting: Blockchain can be used to create secure and transparent voting systems.</li></ul><button  class='next-btn'}>Next</button>`,
          `<h2>Let’s wrap things up</h2><p>So, that’s the brief fundamentals ofblockchain techmology in a nutshell! It’s all about understanding the basics of what blockchain is, how it works, and why it’s important.</p><button  class='next-btn'}>Finish</button>`,
          `<h2>Do you want to take a quiz?</h2><button  class='next-btn'}>Yes</button><button  class='next-btn'}>No</button>`,
        ],
        quizQuestions: [
          `<h2>1. What is a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A decentralized digital ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A centralized database</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of computer network</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>2. Which of the following is a key feature of blockchain technology?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>Centralized control</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Immutability</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>High transaction fees</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Limited scalability</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>3. What is the primary purpose of a consensus mechanism in a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>To increase transaction speed</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To ensure all participants agree on the state of the ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To reduce the cost of transactions</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To centralize control of the network</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>4. Which of the following best describes a smart contract?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p> A legal agreement between two parties</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A self-executing contract with the terms directly written into code</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A traditional paper contract</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><button class='next-btn'}>Finish</button>`,
          `<img src='../../Assets/BookMarkFolder.png' alt="Folder Pics" /><h2>Congratulations!</h2><p>You got 4 out of 4 right.</p><p>You've been rewarded</p><p><b>10 EDX</b></p></button><button  class='next-btn'}>Claim</button><a href='/'><button  class='next-btn'}>Continue Learning</button></a>`
        ],
      },
      {
        id: 1,
        courses: [
          `<h2>Blockchain fundamentals</h2><p>Learn the basics of blockchain technology</p><p>Course Details:</p><ol><li>What is Blockchain?</li><li>Key Features of Blockchain<ul><li>Decentralization</li><li>Transparency</li><li>Security</li></ul></li><li>How Does Blockchain Work?</li><li>Why is Blockchain Important?</li><li>Real-World Applications</li></ol><button class='next-btn'}>Start Course</button>`,
          `<h2>What is Blockchain?</h2><p>Imagine you have a notebook where you write down everything you do each day. Now, imagine that this notebook is shared with everyone in your class, and once you write something in it, it can’t be changed or erased. That’s kind of how a blockchain works!</p><button  class='next-btn'}>Next</button>`,
          `<h2>Key features of the blockchain</h2><ol><li>Decentralization:<ul><li>No Central Authority: Instead of having one person or company in charge, everyone in the network has a copy of the notebook. This means no single person can control or change the information.</li><li>Peer-to-Peer Network: All the computers (or nodes) in the network are connected directly to each other, like a group chat where everyone can see and send messages.</li></ul></li><li>Transparency:<ul><li>Public Ledger: Everyone can see the transactions recorded in the blockchain. It’s like having a public scoreboard where everyone can see the scores.</li><li>Immutable Records: Once something is written in the blockchain, it can’t be changed. This ensures that the information is accurate and trustworthy.</li></ul></li><li>Security:<ul><li>Cryptography: Blockchain uses complex math (cryptography) to secure the information. It’s like having a secret code that only the intended recipient can understand.</li><li>Consensus Mechanisms: Before adding a new entry to the blockchain, all the nodes in the network must agree that it’s valid. This process is called consensus.</li></ul></li></ol><button  class='next-btn'}>Next</button>`,
          `<h2>How Does Blockchain Work?</h2><ol><li>Transaction: Imagine you want to send some digital money (like Bitcoin) to a friend. You create a transaction and broadcast it to the network.</li><li>Verification: The nodes in the network check if the transaction is valid. They make sure you have enough money to send and that you’re the rightful owner.</li><li>Block Creation: Once verified, the transaction is grouped with other transactions to form a block. This block is then added to the chain of previous blocks (hence the name blockchain).</li><li>Consensus: The network uses a consensus mechanism (like Proof of Work or Proof of Stake) to agree on the new block. Once agreed, the block is added to the blockchain, and the transaction is complete.</li></ol><button  class='next-btn'}>Next</button>`,
          `<h2>Why is Blockchain Important?</h2><ul><li>Trust: Because the information is transparent and can’t be changed, people can trust that it’s accurate.</li><li>Security: The use of cryptography and consensus mechanisms makes blockchain very secure.</li><li>Decentralization: Without a central authority, blockchain can be more democratic and resistant to censorship.</li></ul><button  class='next-btn'}>Next</button>`,
          `<h2>Real-World Applications (RWAs)</h2><ul><li>Cryptocurrencies: Digital money like Bitcoin and Ethereum use blockchain technology.</li><li>Supply Chain: Companies can track products from the factory to the store, ensuring they are genuine and not tampered with.</li><li>Voting: Blockchain can be used to create secure and transparent voting systems.</li></ul><button  class='next-btn'}>Next</button>`,
          `<h2>Let’s wrap things up</h2><p>So, that’s the brief fundamentals ofblockchain techmology in a nutshell! It’s all about understanding the basics of what blockchain is, how it works, and why it’s important.</p><button  class='next-btn'}>Finish</button>`,
          `<h2>Do you want to take a quiz?</h2><button  class='next-btn'}>Yes</button><button  class='next-btn'}>No</button>`,
        ],
        quizQuestions: [
          `<h2>1. What is a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A decentralized digital ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A centralized database</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of computer network</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>2. Which of the following is a key feature of blockchain technology?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>Centralized control</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Immutability</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>High transaction fees</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>Limited scalability</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>3. What is the primary purpose of a consensus mechanism in a blockchain?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p>To increase transaction speed</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To ensure all participants agree on the state of the ledger</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To reduce the cost of transactions</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>To centralize control of the network</p></div><button  class='next-btn'}>Next</button>`,
          `<h2>4. Which of the following best describes a smart contract?</h2><div className='quizAnswer'><input type="radio" name="" id="" /><p> A legal agreement between two parties</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A self-executing contract with the terms directly written into code</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A traditional paper contract</p></div><div className='quizAnswer'><input type="radio" name="" id="" /><p>A type of cryptocurrency</p></div><button class='next-btn'}>Finish</button>`,
          `<img src='../../Assets/BookMarkFolder.png' alt="Folder Pics" /><h2>Congratulations!</h2><p>You got 4 out of 4 right.</p><p>You've been rewarded</p><p><b>10 EDX</b></p></button><button  class='next-btn'}>Claim</button><a href='/'><button  class='next-btn'}>Continue Learning</button></a>`
        ],
      },
    ]

    // Function to handle button click and move to the next section
  const handleNext = () => {
    if (isQuiz) {
      if (currentIndex < edxCourses[0].quizQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert("You've completed the quiz and claimed your token");
      }
    } else {
      if (currentIndex < edxCourses[0].courses.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsQuiz(true);
        setCurrentIndex(0);
      }
    }
  };
  
  const handleContentClick = (e) => {
    if (e.target.classList.contains('next-btn')) {
      handleNext();
    }
  };

  return (
    <div className='quiz'>
      <h1>Introduction to Blockchain Fundamentals and the Sui Blockchain</h1>
      <div className='text-details'>
        <img width={500} height={500} src={BlockchainQuizImg} alt="Quiz Heading" />
        
        <div
          className='quiz-text'
          dangerouslySetInnerHTML={{
            __html: isQuiz 
              ? edxCourses[0].quizQuestions[currentIndex] 
              : edxCourses[0].courses[currentIndex]
          }}
          onClick={handleContentClick} 
        />
      </div>
    </div>
  );
}

export default Quiz;