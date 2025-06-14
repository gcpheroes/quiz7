// script.js

// ─── Question Data ─────────────────────────────────────────────────────────
const questions = [
  {
    "question": "A small number of API requests to your microservices-based application take a very long time. You know that each request to the API can traverse many services.\nYou want to know which service takes the longest in those cases.\n\nWhat should you do?",
    "options": [
      "Set timeouts on your application so that you can fail requests faster",
      "Send custom metrics for each of your requests to Stackdriver Monitoring",
      "Use Stackdriver Monitoring to look for insights that show when your API latencies are high",
      "Instrument your application with Stackdriver Trace in order to break down the request latencies at each microservice"
    ],
    "answer": [
      "Instrument your application with Stackdriver Trace in order to break down the request latencies at each microservice"
    ],
    "multiple": false
  },
  {
    "question": "During a high traffic portion of the day, one of your relational databases crashes, but the replica is never promoted to a master. You want to avoid this in the future.\n\nWhat should you do?",
    "options": [
      "Use a different database",
      "Choose larger instances for your database",
      "Create snapshots of your database more regularly",
      "Implement routinely scheduled failovers of your databases"
    ],
    "answer": [
      "Implement routinely scheduled failovers of your databases"
    ],
    "multiple": false
  },
  {
    "question": "Your organization requires that metrics from all applications be retained for 5 years for future analysis in possible legal proceedings.\n\nWhich approach should you use?",
    "options": [
      "Grant the security team access to the logs in each Project",
      "Configure Stackdriver Monitoring for all Projects, and export to BigQuery",
      "Configure Stackdriver Monitoring for all Projects with the default retention policies",
      "Configure Stackdriver Monitoring for all Projects, and export to Google Cloud Storage"
    ],
    "answer": [
      "Configure Stackdriver Monitoring for all Projects, and export to Google Cloud Storage"
    ],
    "multiple": false
  },
  {
    "question": "Your company has decided to build a backup replica of their on-premises user authentication PostgreSQL database on Google Cloud Platform. The database is 4TB, and large updates are frequent. Replication requires private address space communication.\n\nWhich networking approach should you use?",
    "options": [
      "Google Cloud Dedicated Interconnect",
      "Google Cloud VPN connected to the data center network",
      "A NAT and TLS translation gateway installed on-premises",
      "A Google Compute Engine instance with a VPN server installed connected to the data center network"
    ],
    "answer": [
      "Google Cloud Dedicated Interconnect"
    ],
    "multiple": false
  },
  {
    "question": "Auditors visit your teams every 12 months and ask to review all the Google Cloud Identity and Access Management (Cloud IAM) policy changes in the previous 12 months. You want to streamline and expedite the analysis and audit process.\n\nWhat should you do?",
    "options": [
      "Create custom Google Stackdriver alerts and send them to the auditor",
      "Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor",
      "Use cloud functions to transfer log entries to Google Cloud SQL and use ACLs and views to limit an auditor's view",
      "Enable Google Cloud Storage (GCS) log export to audit logs into a GCS bucket and delegate access to the bucket"
    ],
    "answer": [
      "Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor"
    ],
    "multiple": false
  },
  {
    "question": "You are designing a large distributed application with 30 microservices. Each of your distributed microservices needs to connect to a database back-end. You want to store the credentials securely.\n\nWhere should you store the credentials?",
    "options": [
      "In the source code",
      "In an environment variable",
      "In a secret management system",
      "In a config file that has restricted access through ACLs"
    ],
    "answer": [
      "In a secret management system"
    ],
    "multiple": false
  },
  {
    "question": "A lead engineer wrote a custom tool that deploys virtual machines in the legacy data center. He wants to migrate the custom tool to the new cloud environment.\nYou want to advocate for the adoption of Google Cloud Deployment Manager.\n\nWhat are two business risks of migrating to Cloud Deployment Manager? (Choose two.)",
    "options": [
      "Cloud Deployment Manager uses Python",
      "Cloud Deployment Manager APIs could be deprecated in the future",
      "Cloud Deployment Manager is unfamiliar to the company's engineers",
      "Cloud Deployment Manager requires a Google APIs service account to run",
      "Cloud Deployment Manager can be used to permanently delete cloud resources",
      "Cloud Deployment Manager only supports automation of Google Cloud resources"
    ],
    "answer": [
      "Cloud Deployment Manager is unfamiliar to the company's engineers",
      "Cloud Deployment Manager only supports automation of Google Cloud resources"
    ],
    "multiple": true
  },
  {
    "question": "A development manager is building a new application. He asks you to review his requirements and identify what cloud technologies he can use to meet them. The application must:\n1. Be based on open-source technology for cloud portability\n2. Dynamically scale compute capacity based on demand\n3. Support continuous software delivery\n4. Run multiple segregated copies of the same application stack\n5. Deploy application bundles using dynamic templates\n6. Route network traffic to specific services based on URL\n\nWhich combination of technologies will meet all of his requirements?",
    "options": [
      "Google Kubernetes Engine, Jenkins, and Helm",
      "Google Kubernetes Engine and Cloud Load Balancing",
      "Google Kubernetes Engine and Cloud Deployment Manager",
      "Google Kubernetes Engine, Jenkins, and Cloud Load Balancing"
    ],
    "answer": [
      "Google Kubernetes Engine, Jenkins, and Helm"
    ],
    "multiple": false
  },
  {
    "question": "You have created several pre-emptible Linux virtual machine instances using Google Compute Engine. You want to properly shut down your application before the virtual machines are preempted.\n\nWhat should you do?",
    "options": [
      "Create a shutdown script named k99.shutdown in the /etc/rc.6.d/ directory",
      "Create a shutdown script registered as a xinetd service in Linux and configure a Stackdriver endpoint check to call the service",
      "Create a shutdown script and use it as the value for a new metadata entry with the key shutdown-script in the Cloud Platform Console when you create the new virtual machine instance",
      "Create a shutdown script, registered as a xinetd service in Linux, and use the gcloud compute instances add-metadata command to specify the service URL as the value for a new metadata entry with the key shutdown-script-url"
    ],
    "answer": [
      "Create a shutdown script and use it as the value for a new metadata entry with the key shutdown-script in the Cloud Platform Console when you create the new virtual machine instance"
    ],
    "multiple": false
  },
  {
    "question": "Your organization has a 3-tier web application deployed in the same network on Google Cloud Platform. Each tier (web, API, and database) scales independently of the others. Network traffic should flow through the web to the API tier and then on to the database tier. Traffic should not flow between the web and the database tier.\n\nHow should you configure the network?",
    "options": [
      "Add each tier to a different subnetwork",
      "Set up software based firewalls on individual VMs",
      "Add tags to each tier and set up routes to allow the desired traffic flow",
      "Add tags to each tier and set up firewall rules to allow the desired traffic flow"
    ],
    "answer": [
      "Add tags to each tier and set up firewall rules to allow the desired traffic flow"
    ],
    "multiple": false
  },
  {
    "question": "Your development team has installed a new Linux kernel module on the batch servers in Google Compute Engine (GCE) virtual machines (VMs) to speed up the nightly batch process. Two days after the installation, 50% of the batch servers failed the nightly batch run. You want to collect details on the failure to pass back to the development team.\n\nWhich three actions should you take? (Choose three.)",
    "options": [
      "Use Stackdriver Logging to search for the module log entries",
      "Read the debug GCE Activity log using the API or Cloud Console",
      "Use gcloud or Cloud Console to connect to the serial console and observe the logs",
      "Identify whether a live migration event of the failed server occurred, using in the activity log",
      "Adjust the Google Stackdriver timeline to match the failure time, and observe the batch server metrics",
      "Export a debug VM into an image, and run the image on a local server where kernel log messages will be displayed on the native screen"
    ],
    "answer": [
      "Use Stackdriver Logging to search for the module log entries",
      "Use gcloud or Cloud Console to connect to the serial console and observe the logs",
      "Adjust the Google Stackdriver timeline to match the failure time, and observe the batch server metrics"
    ],
    "multiple": true
  },
  {
    "question": "Your company wants to try out the cloud with low risk. They want to archive approximately 100 TB of their log data to the cloud and test the analytics features available to them there, while also retaining that data as a long-term disaster recovery backup.\n\nWhich two steps should you take? (Choose two.)",
    "options": [
      "Load logs into Google BigQuery",
      "Load logs into Google Cloud SQL",
      "Import logs into Google Stackdriver",
      "Insert logs into Google Cloud Bigtable"
    ],
    "answer": [
      "Load logs into Google BigQuery"
    ],
    "multiple": false
  },
  {
    "question": "You created a pipeline that can deploy your source code changes to your infrastructure in instance groups for self-healing. One of the changes negatively affects your key performance indicator. You are not sure how to fix it, and investigation could take up to a week.\n\nWhat should you do?",
    "options": [
      "Log in to a server, and iterate on the fox locally",
      "Revert the source code change, and rerun the deployment pipeline",
      "Log into the servers with the bad code change, and swap in the previous code",
      "Change the instance group template to the previous one, and delete all instances"
    ],
    "answer": [
      "Revert the source code change, and rerun the deployment pipeline"
    ],
    "multiple": false
  },
  {
    "question": "Your organization wants to control IAM policies for different departments independently, but centrally.\n\nWhich approach should you take?",
    "options": [
      "Multiple Organizations with multiple Folders",
      "Multiple Organizations, one for each department",
      "A single Organization with Folders for each department",
      "A single Organization with multiple projects, each with a central owner"
    ],
    "answer": [
      "A single Organization with Folders for each department"
    ],
    "multiple": false
  },
  {
    "question": "You deploy your custom Java application to Google App Engine. It fails to deploy and gives you the following stack trace.\n\nWhat should you do?\n\nhttps://www.examtopics.com/assets/media/exam-media/04339/0009300001.png",
    "options": [
      "Upload missing JAR files and redeploy your application.",
      "Digitally sign all of your JAR files and redeploy your application",
      "Recompile the CLoakedServlet class using and MD5 hash instead of SHA1"
    ],
    "answer": [
      "Digitally sign all of your JAR files and redeploy your application"
    ],
    "multiple": false
  },
  {
    "question": "You are designing a mobile chat application. You want to ensure people cannot spoof chat messages, by providing a message were sent by a specific user.\n\nWhat should you do?",
    "options": [
      "Tag messages client side with the originating user identifier and the destination user.",
      "Encrypt the message client side using block-based encryption with a shared key.",
      "Use public key infrastructure (PKI) to encrypt the message client side using the originating user's private key.",
      "Use a trusted certificate authority to enable SSL connectivity between the client application and the server."
    ],
    "answer": [
      "Use public key infrastructure (PKI) to encrypt the message client side using the originating user's private key."
    ],
    "multiple": false
  },
  {
    "question": "As part of implementing their disaster recovery plan, your company is trying to replicate their production MySQL database from their private data center to their GCP project using a Google Cloud VPN connection. They are experiencing latency issues and a small amount of packet loss that is disrupting the replication.\n\nWhat should they do?",
    "options": [
      "Configure their replication to use UDP.",
      "Configure a Google Cloud Dedicated Interconnect.",
      "Restore their database daily using Google Cloud SQL.",
      "Add additional VPN connections and load balance them.",
      "Send the replicated transaction to Google Cloud Pub/Sub."
    ],
    "answer": [
      "Configure a Google Cloud Dedicated Interconnect."
    ],
    "multiple": false
  },
  {
    "question": "Your customer support tool logs all email and chat conversations to Cloud Bigtable for retention and analysis. What is the recommended approach for sanitizing this data of personally identifiable information or payment card information before initial storage?",
    "options": [
      "Hash all data using SHA256",
      "Encrypt all data using elliptic curve cryptography",
      "De-identify the data with the Cloud Data Loss Prevention API",
      "Use regular expressions to find and redact phone numbers, email addresses, and credit card numbers"
    ],
    "answer": [
      "De-identify the data with the Cloud Data Loss Prevention API"
    ],
    "multiple": false
  },
  {
    "question": "You are using Cloud Shell and need to install a custom utility for use in a few weeks. Where can you store the file so it is in the default execution path and persists across sessions?",
    "options": [
      "~/bin",
      "Cloud Storage",
      "/google/scripts",
      "/usr/local/bin"
    ],
    "answer": [
      "~/bin"
    ],
    "multiple": false
  },
  {
    "question": "You want to create a private connection between your instances on Compute Engine and your on-premises data center. You require a connection of at least 20\nGbps. \n\nYou want to follow Google-recommended practices. How should you set up the connection?",
    "options": [
      "Create a VPC and connect it to your on-premises data center using Dedicated Interconnect.",
      "Create a VPC and connect it to your on-premises data center using a single Cloud VPN.",
      "Create a Cloud Content Delivery Network (Cloud CDN) and connect it to your on-premises data center using Dedicated Interconnect.",
      "Create a Cloud Content Delivery Network (Cloud CDN) and connect it to your on-premises datacenter using a single Cloud VPN."
    ],
    "answer": [
      "Create a VPC and connect it to your on-premises data center using Dedicated Interconnect."
    ],
    "multiple": false
  },
  {
    "question": "You are analyzing and defining business processes to support your startup's trial usage of GCP, and you don't yet know what consumer demand for your product will be. Your manager requires you to minimize GCP service costs and adhere to Google best practices. \n\nWhat should you do?",
    "options": [
      "Utilize free tier and sustained use discounts. Provision a staff position for service cost management.",
      "Utilize free tier and sustained use discounts. Provide training to the team about service cost management. ",
      "Utilize free tier and committed use discounts. Provision a staff position for service cost management.",
      "Utilize free tier and committed use discounts. Provide training to the team about service cost management."
    ],
    "answer": [
      "Utilize free tier and sustained use discounts. Provide training to the team about service cost management."
    ],
    "multiple": false
  },
  {
    "question": "You are building a continuous deployment pipeline for a project stored in a Git source repository and want to ensure that code changes can be verified before deploying to production. \n\nWhat should you do?",
    "options": [
      "Use Spinnaker to deploy builds to production using the red/black deployment strategy so that changes can easily be rolled back.",
      "Use Spinnaker to deploy builds to production and run tests on production deployments.",
      "Use Jenkins to build the staging branches and the master branch. Build and deploy changes to production for 10% of users before doing a complete rollout.",
      "Use Jenkins to monitor tags in the repository. Deploy staging tags to a staging environment for testing. After testing, tag the repository for production and deploy that to the production environment."
    ],
    "answer": [
      "Use Jenkins to monitor tags in the repository. Deploy staging tags to a staging environment for testing. After testing, tag the repository for production and deploy that to the production environment."
    ],
    "multiple": false
  },
  {
    "question": "You have an outage in your Compute Engine managed instance group: all instances keep restarting after 5 seconds. You have a health check configured, but autoscaling is disabled. Your colleague, who is a Linux expert, offered to look into the issue. You need to make sure that he can access the VMs. \n\nWhat should you do?",
    "options": [
      "Grant your colleague the IAM role of project Viewer",
      "Perform a rolling restart on the instance group",
      "Disable the health check for the instance group. Add his SSH key to the project-wide SSH Keys",
      "Disable autoscaling for the instance group. Add his SSH key to the project-wide SSH Keys"
    ],
    "answer": [
      "Disable the health check for the instance group. Add his SSH key to the project-wide SSH Keys"
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);

// ─── State & DOM References ───────────────────────────────────────────────────
let currentQuestion   = 0;
let score             = 0;
let showingFeedback   = false;
let quizStartTime     = new Date();
let totalTimeSeconds  = 90 * 60;
let countdownInterval = null;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const nextBtn    = document.getElementById("nextBtn");
const finishBtn  = document.getElementById("finishTestBtn");
const resultEl   = document.getElementById("result");
const timerEl    = document.getElementById("timer");

// ─── Utility Functions ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function normalize(str) {
  return str
    .replace(/\\/g, "")     // remove all backslashes
    .replace(/\s+/g, " ")   // collapse whitespace/newlines into single spaces
    .trim();
}

function updateProgress() {
  const pct = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ─── Render Question ─────────────────────────────────────────────────────────
function loadQuestion() {
  showingFeedback    = false;
  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";

  const q         = questions[currentQuestion];
  const shuffled  = shuffleArray([...q.options]);
  const inputType = q.multiple ? "checkbox" : "radio";

  // break the question into lines, render any image-URL as an <img>
  const html = q.question
    .split('\n')
    .map(line => {
      const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
      if (m) {
        return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
      }
      // otherwise escape & wrap in a paragraph
      return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
    })
    .join('');
  questionEl.innerHTML = html;
  optionsEl.innerHTML    = "";

  shuffled.forEach(option => {
    const li    = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'option';
  
    const input = document.createElement('input');
    input.type  = inputType;
    input.name  = 'option';
    input.value = option;
  
    const span = document.createElement('span');
    if (option.match(/\.(jpe?g|png|gif|webp)$/i)) {
      const img = document.createElement('img');
      img.src    = option;
      img.alt    = 'Option image';
      img.style.maxWidth = '100%';
      img.style.height   = 'auto';
      span.appendChild(img);
    } else {
      span.textContent = option;
    }
  
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      label.classList.add('selected');
    });
  
    label.append(input, span);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });


  // wire up the “selected” highlight
  optionsEl.querySelectorAll(`input[name="option"]`).forEach(input => {
    input.addEventListener("change", () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      input.parentElement.classList.add("selected");
    });
  });

  updateProgress();
  finishBtn.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}



// ─── Timer ────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const h = Math.floor(totalTimeSeconds / 3600);
  const m = Math.floor((totalTimeSeconds % 3600) / 60);
  const s = totalTimeSeconds % 60;

  let parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);

  timerEl.textContent = `Time Remaining: ${parts.join(" ")}`;
  totalTimeSeconds--;

  if (totalTimeSeconds < 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}

function startTimer() {
  updateTimerDisplay();
  countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// ─── Submission & Feedback ───────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  const currentQ       = questions[currentQuestion];
  const selectedInputs = Array.from(
    document.querySelectorAll("input[name='option']:checked")
  );

  if (!showingFeedback) {
    if (selectedInputs.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    // Normalize selected vs. correct
    const selectedNorm = selectedInputs.map(i => normalize(i.value));
    const correctNorm  = currentQ.answer.map(a => normalize(a));

    const isCorrect =
      selectedNorm.length === correctNorm.length &&
      correctNorm.every(ans => selectedNorm.includes(ans));

    const selectedRaw = selectedInputs.map(input => input.value); // preserve original formatting
      userAnswers[currentQuestion] = {
        selected: selectedRaw,
        correct: currentQ.answer,
        question: currentQ.question,
        explanation: currentQ.explanation
      };


    // Disable & highlight in one pass
    optionsEl.querySelectorAll("input[name='option']").forEach(input => {
      input.disabled = true;
      const valNorm = normalize(input.value);
      const lbl     = input.parentElement;

      if (correctNorm.includes(valNorm))       lbl.classList.add("correct");
      else if (input.checked)                  lbl.classList.add("incorrect");
    });

    // Show feedback message
    resultEl.innerHTML = isCorrect
      ? `<p style="color:green;">✅ Correct!</p>`
      : `<p style="color:red;">❌ Incorrect.</p>
         <p>Correct Answer:<br><strong>${currentQ.answer.join("<br>")}</strong></p>`;
    
    
    // ⬇️ Add this below the feedback
    if (currentQ.explanation) {
      resultEl.innerHTML += `<p class="explanation"><strong>Explanation:</strong> ${currentQ.explanation}</p>`;
    }

    
    if (isCorrect) score++;
    showingFeedback     = true;
    nextBtn.textContent = (currentQuestion < questions.length - 1)
      ? "Next Question"
      : "See Result";

  } else {
    // Move to next question or finish
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(" ");
}

function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const duration = formatDuration(Math.floor((endTime - quizStartTime) / 1000));

  const record = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  history.push(record);
  localStorage.setItem("quizScoreHistory", JSON.stringify(history));
}

function displayScoreHistory() {
  const container = document.querySelector(".container");
  const historyDiv = document.getElementById("scoreHistory");
  if (historyDiv) historyDiv.remove();

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  if (history.length === 0) return;

  const div = document.createElement("div");
  div.id = "scoreHistory";
  div.style.display = "none";
  div.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr><th>#</th><th>Score</th><th>Time Taken</th><th>Date</th></tr>
      </thead>
      <tbody>
        ${history.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${r.score} / ${r.total}</td>
            <td>${r.duration}</td>
            <td>${r.date}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    
    <div style="margin-top: 10px;">
      <button id="clearHistoryBtn">Clear History</button>
      <button id="restartFromHistoryBtn" style="margin-left: 10px;">Restart Quiz</button>
    </div>
    <hr>
  `;
  container.insertBefore(div, document.getElementById("quiz"));

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Clear all score history?")) {
      localStorage.removeItem("quizScoreHistory");
      displayScoreHistory();
    }
  });

  document.getElementById('restartFromHistoryBtn').addEventListener('click', () => {
    if (confirm("Do you want to restart the quiz?")) {
      // Reset quiz state
      score = 0;
      currentQuestion = 0;
      showingFeedback = false;
      quizStartTime = new Date();
  
      // Reset timer
      clearInterval(countdownInterval);
      totalTimeSeconds = 90 * 60; // reset to your default duration
      updateTimerDisplay();
      startTimer();

      // Hide score history section
      const historySection = document.getElementById("scoreHistory");
      if (historySection) historySection.style.display = "none";
  
      // Shuffle and reload quiz
      questions.sort(() => Math.random() - 0.5);
      document.getElementById("quiz").style.display = "block";
      document.getElementById("finalResult").style.display = "none";
      const summary = document.getElementById("summaryPage");
      if (summary) summary.style.display = "none";
  
      loadQuestion();
    }
  });

}


// Helper functions:

function renderAnswerHTML(answers) {
  return answers.map(ans => {
    if (ans.match(/\.(jpe?g|png|gif|webp)$/i)) {
      return `<img src="${ans}" alt="Answer image" style="max-width:100%;height:auto;margin:6px 0;">`;
    }
    return `<p>${ans}</p>`;
  }).join("");
}

function renderQuestionHTML(text) {
  return text.split('\n').map(line => {
    const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
    if (m) {
      return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
    }
    return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
  }).join('');
}


// ─── Show Result & Restart ───────────────────────────────────────────────────
function showResult() {
  clearInterval(countdownInterval);
  saveScoreToHistory(score, questions.length);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
  `;
  finishBtn.style.display = "none";

  displayScoreHistory();
  document.getElementById("scoreHistory").style.display = "block";

  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    clearInterval(countdownInterval);
    totalTimeSeconds = 90 * 60;
    startTimer();

    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });

  const summaryDiv = document.getElementById("summaryPage");
  summaryDiv.innerHTML = "<h3>Question Summary</h3>";

  userAnswers.forEach((entry, index) => {
    const isCorrect =
      entry.selected.length === entry.correct.length &&
      entry.correct.every(ans => entry.selected.includes(ans));

    const explanationHTML = entry.explanation
      ? `<p><strong>Explanation:</strong><br>${entry.explanation}</p>`
      : "";

    const questionHTML = `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 12px;">
        <p><strong>Q${index + 1}:</strong></p>
        ${renderQuestionHTML(entry.question)}
        <p><strong>Your Answer:</strong><br>${renderAnswerHTML(entry.selected)}</p>
        <p><strong>Correct Answer:</strong><br>${renderAnswerHTML(entry.correct)}</p>
        <p>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
        ${explanationHTML}
      </div>
    `;

    summaryDiv.innerHTML += questionHTML;
  });

    
    // Hide quiz and show summary
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    document.getElementById("scoreHistory").style.display = "block";
    summaryDiv.style.display = "block";

}


// ─── Bootstrap ───────────────────────────────────────────────────────────────

finishBtn.style.display = "none";
loadQuestion();
startTimer();
