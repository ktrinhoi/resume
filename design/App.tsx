export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,rgba(120,160,255,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_80%_400px,rgba(255,255,255,0.6),transparent)]" />
      
      <main className="relative max-w-3xl mx-auto px-6 py-20 print:px-4 print:py-8">
        
        {/* Hero Section */}
        <section className="text-center mb-20 print:mb-12">
          <div className="mb-8">
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-3 print:text-3xl">Trinh Ngo</h1>
            <p className="text-xl text-gray-600 font-light print:text-lg">Strategic Portfolio Retention Growth</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 print:gap-4">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              (+84) 394821870
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              kieutrinh.ngo.work@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              Hanoi/ HCMC, D7
            </span>
          </div>
        </section>

        {/* Executive Summary Card */}
        <section className="mb-16 print:mb-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-10 print:shadow-none print:border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Executive Summary</h2>
            <p className="text-lg leading-relaxed text-gray-800 font-light">
              A growth-focused fintech strategist with a proven track record in digital banking and customer lifecycle management. Over the past 4+ years, I've driven credit card portfolio growth, omnichannel marketing, and AI-powered customer engagement, delivering impactful initiatives through a blend of data-driven decision-making and creative execution. I'm excited to bring my passion and strategic ingenuity to contribute to Techcombank's evolving financial-lifestyle ecosystem.
            </p>
          </div>
        </section>

        {/* Core Competencies Card */}
        <section className="mb-16 print:mb-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-10 print:shadow-none print:border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Strategic Leadership',
                'Fintech & AI',
                'Product Growth',
                'CRM & Lifecycle Marketing',
                'Data Analytics',
                'Revenue Optimization',
                'Cross-functional Collaboration',
                'Campaign Management',
                'Customer Retention'
              ].map((skill, index) => (
                <div key={index} className="flex items-center py-3 px-4 bg-gray-50/60 rounded-2xl">
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Card */}
        <section className="mb-16 print:mb-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-10 print:shadow-none print:border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-10">Experience</h2>
            
            {/* Current Role */}
            <div className="mb-12 pb-12 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">TRUSTING SOCIAL | TPBank EVO</h3>
                  <p className="text-gray-600">Portfolio & Campaign Management</p>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-blue-700">Jun 2024 – Present</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Implemented EMOB activation programs that achieved a <strong className="text-gray-900">97% activation rate</strong> in the first month for new cardholders (up from baseline ≈ 45%), involving multi-channel education campaigns, in-app tutorials, and spending nudges from ideation to MVP.</p>
                
                <p>Scaled new credit card portfolio segmentation through data-driven strategy: conducting behavioral research and advanced segmentation (spend patterns, credit limits, RFM modeling) for TPBank's EVO credit card partnership to tailor value propositions.</p>
                
                <p>Executed high-impact CRM and loyalty campaigns: Deployed Gen-AI human-like agents and personalized outreach across telesales and Zalo, driving monthly spend uplift ≈ <strong className="text-gray-900">₫30B (~$1.25M)</strong> in portfolio, boosting customer engagement and share of wallet.</p>
                
                <p>Introduced AI-driven sales enablement: Spearheaded AI tools for human salesforce including auto-transcription and tone analysis for call agents, improving conversion rates and capturing rich data for training.</p>
              </div>
              
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-amber-600">🏆</span>
                  <span className="text-sm font-medium text-amber-700">Rising Star of the Year</span>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="mb-12 pb-12 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">SEEDCOM GROUP</h3>
                  <p className="text-gray-600">Assistant to VP of Marketing, promoted from MKT Specialist</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-700">Jun 2022 - Jun 2024</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Spearheaded go-to-market strategies for <strong className="text-gray-900">14+ product lines</strong>: Crafted integrated online/offline marketing plans ensuring revenue targets (<strong className="text-gray-900">100%+ to KPI for 4 consecutive quarters</strong>) through merchandising, digital marketing, events, and partnerships.</p>
                
                <p>Optimized pricing and promotions with data: Analyzed inventory turnover and sales data, adjusting pricing/promotional tactics, leading to <strong className="text-gray-900">40% profit growth</strong> with gross margins &gt;50%.</p>
                
                <p>Managed large-scale campaigns: Led TikTok #LearnOnTikTok and platform-wide Super Brand Day, collaborating with <strong className="text-gray-900">500+ KOLs/KOCs</strong>, resulting in 70% Facebook reach increase and 48% TikTok follower growth in one month.</p>
                
                <p>Improved marketing cost-to-income ratio from <strong className="text-gray-900">10% down to 7%</strong> through strategic budget reallocation, focusing on profitable growth during business pivot.</p>
                
                <p>Enhanced customer loyalty: Designed retention programs (loyalty points, purchase incentives, personalized messaging) increasing conversion rates by <strong className="text-gray-900">53% in Q1 2024</strong>.</p>
              </div>
            </div>

            {/* Earlier Role */}
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">ANYMIND VIETNAM, ADASIA</h3>
                  <p className="text-gray-600">Strategist</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-700">Mar 2021 – May 2022</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Developed comprehensive social media and influencer marketing strategies for clients across FMCG, retail, and tech, achieving <strong className="text-gray-900">65% win rate on 50+ project pitches</strong>.</p>
                
                <p><strong className="text-gray-900">Major Clients:</strong> Hoa Phat, Nestlé, Nivea, Grab, Cake by VP Bank, Uniqlo.</p>
              </div>
              
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-amber-600">🏆</span>
                  <span className="text-sm font-medium text-amber-700">MVP of the Month</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Card */}
        <section className="mb-16 print:mb-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-10 print:shadow-none print:border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-10">Education</h2>
            
            {/* Master's Degree */}
            <div className="mb-10 pb-10 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Master of Finance and Banking</h3>
                  <p className="text-gray-600 mb-2">University of Banking, Ho Chi Minh City (HUB)</p>
                  <p className="text-sm text-gray-500">Concentration in Finance, Banking, and Fintech</p>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-blue-700">2025 – 2027</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                <strong>Relevant coursework:</strong> Data Science in Finance, Fintech & AI, Financial Investment & Portfolio Management, Financial Derivatives, Blockchain, Machine Learning in Finance
              </p>
            </div>
            
            {/* Bachelor's Degree */}
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Bachelor of Arts (Hons) in Marketing Management</h3>
                  <p className="text-gray-600 mb-2">British University Vietnam – Awarded by Staffordshire University, UK</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-700">2019 – 2022</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="bg-amber-50 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-amber-700">Dean's Scholarship (2019)</span>
                </div>
                <div className="bg-amber-50 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-amber-700">Dean's Award for Academic Excellence (2020)</span>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Relevant coursework:</strong> Brand Management, Consumer Behavior, Experiential Marketing, Marketing Campaigns, Digital Marketing Strategy, Big Data
              </p>
            </div>
          </div>
        </section>

        {/* Languages & Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Languages Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-8 print:shadow-none print:border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Languages</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Vietnamese</span>
                <div className="bg-green-50 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-green-700">Native</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">English</span>
                <div className="bg-blue-50 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-blue-700">Professional C1</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Korean & Chinese</span>
                <div className="bg-gray-50 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-600">Beginner</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Tools Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-8 print:shadow-none print:border-gray-200">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Technical Tools</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data & Analytics</h4>
                <p className="text-gray-600">SQL, Google Apps Script, Looker Studio</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">CRM & Campaigns</h4>
                <p className="text-gray-600">Zalo, In-house CRM, Campaign Engines</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">AI & Automation</h4>
                <p className="text-gray-600">AI-driven scripting, auto-transcription, tone detection</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
