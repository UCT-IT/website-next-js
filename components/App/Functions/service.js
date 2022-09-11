
import {
	Computer,
	Facebook,
	OndemandVideo,
	CellWifi,
	Http,
	Devices,
	Store,

	Equalizer,
	RecordVoiceOver,
	Beenhere,
	Toc,
	EmojiPeople,
	Group,

	Public,
	Create,
	ViewQuilt,
	Web,
	Apps,
	Chat,

	Gif,
	PlayCircleOutline,
	ViewArray,
	Code,
	Business

} from '@material-ui/icons'

const getServices = () => {
	const featuresFontSize = 70;

	const list =
		[
			{
				title: 'Computer Training',
				subtitle: 'Our Courses',
				link: '/services/training',
				description: `UCT IT Has Been Providing Our Services With World-Class Quality And Has Numerous Satisfied Clients. We Have Designed All Of Our Training Courses Which Are Best Suited For The Students Of Bangladesh. 

					But For That We Do Not Compromise The Quality Rather We Take Special Care Of Every Student Who Have IT Knowledge From Basic To Advanced`,
				picture: '/Home/computer-training.svg',
				shortdescription: 'Learn to use computers',
				icon: <Computer style={{ fontSize: 110 }} />,
				features: {
					title: 'Why Choose Us?',
					description: `One Of The Main Objectives Of UCT IT is to create Skilled And Professionally Committed IT Experts, By Providing World-Class Training Facilities, To Contribute To The Development Of The IT Industry Of Bangladesh As Well As To Make Them Capable Enough To Work In The Local And International IT Industry And Marketplaces.

						We Have Skilled And Experienced Trainer Team, Those Make Sure Each Student To Become Able To Prove Himself As A Qualified Professional In The Competitive Corporate World. 
						
						UCT IT Ensures First Strong Basic Knowledge On The Course Trainees Get Taught In. UCT IT Believes In Providing Standard Training Facilities, Which Allows Each Trainee To Become Successful IT Professionals And Freelancers, So That Those Can Contribute To Local IT Development For Long Run.`,
					featureslist: [
						{
							title: 'Microsoft Office',
							icon: <Equalizer style={{ fontSize: featuresFontSize }} />,
							description: `In this course, you’ll learn A Suite Of Desktop Productivity Applications That Is Designed Specifically To Be Used For Office Or Business Use. It Mainly Consists Of Word, Excel, PowerPoint, Access, OneNote, Outlook And Publisher Applications.`
						},
						{
							title: 'Graphics Design',
							icon: <Gif style={{ fontSize: featuresFontSize }} />,
							description: `In this course, you’ll learn the ins & outs of industry standard soft & practical skills of Graphic Design. This course is more focused on freelancing oriented marketplace works like Freelancer.com, Fiverr, 99 Designs etc. Building concepts to creating pixel perfect composition, everything is taught from scratch.`
						},
						{
							title: 'Video Editing',
							icon: <PlayCircleOutline style={{ fontSize: featuresFontSize }} />,
							description: `If you want to be a freelancer or youtube content creator, we’re here to help! From opening a brand new youtube channel to working in giant marketplace like fiverr & freelancer, everything is served hot in this course. You’ll be able to learn how to start & finish a complete editing project from the scratch.`
						},
						{
							title: 'Web Design & Development',
							icon: <ViewArray style={{ fontSize: featuresFontSize }} />,
							description: `In this course, you’ll be introduced to the boundless world of web designing which creates the overall look and feel when you’re using a website. It’s the process of planning and building the elements of your website, from structure and layout to images, colors, fonts and graphics.`
						},
						{
							title: 'Programming',
							icon: <Code style={{ fontSize: featuresFontSize }} />,
							description: `Learn programming with our free online courses from real college courses from the world's leading universities. Master skills in basic programming languages such as Python, Java, C++ etc. Pick up these essential coding skills needed for frontend and/or backend App development, machine learning, IOS, Android, and much more.`
						},
						{
							title: 'Auto CAD/Architect Design',
							icon: <Business style={{ fontSize: featuresFontSize }} />,
							description: `A selection of CAD courses ranging from 2D AutoCAD to advanced 3D modeling using applications like Autodesk Inventor and SolidWorks. Computer Aided Design (CAD) tools are being increasingly used in engineering and architectural fields. As well, CAD is finding applications in other areas such as facilities management and interior design.`
						},
					]
				}
			},
			{
				title: 'Digital Marketing',
				link: '/services/marketing',
				description: `Digital Media has changed the way we interact & do business while creating a new avenue to grow our earning exponentially. 
					While it’s easy to use social media. Harnessing its true power is a different ball game. We have several years of EXPERIENCE, CUSTOMER’S TRUST & CERTIFIED 
					social media planners, buyers & content developers to create a great experience for your brand or increase sales online & offline.`,
				picture: '/Home/digital-marketing.svg',
				shortdescription: 'Get More Lead and Revenue from Marketing Investment',
				icon: <Facebook style={{ fontSize: 110 }} />,
				features: {
					title: 'How do we Transform your Digital Presence?',
					description: `1. After gaining a deep understanding of your buyer’s persona, we identify your goals. Further, we align those goals with your existing digital assets and channels. We capitalise on the Demand Generation plans to develop a roadmap of activities pivoting growth and ROI.

						2. Any ad campaign is as good as its management. That is why we work with smart and intelligent marketing platforms that help us understand the campaigns, monitor their progress, and make the required changes instantly. The aim is to nurture more leads and increase conversions.
					
						3. We give prime importance to the data gathered from all the platforms. After consolidating the data, we create a unique identity of each customer which helps in creating optimised campaigns leading to higher conversions and better revenue.
					
						4. Personalising your marketing tactics is great for your business. We embed these pointers in your brand messaging at every stage in the customer journey. Personalisation helps us increase and improve customer acquisition and enhance retention.
					
						5. To increase your engagement and generate more revenue, we fuse different channels. This helps us widen the sales funnel all the while giving more room to personalise ad campaigns and in turn create more demand.`,
					featureslist: [
						{
							title: 'Search Engine Optimization(SEO)',
							icon: <Equalizer style={{ fontSize: featuresFontSize }} />,
							description: `We provide ethical SEO services that can generate organic leads. As a top digital marketing agency, Mobmaxime excels at website auditing and generating bespoke strategies for higher growth.`
						},
						{
							title: 'Social Media Marketing(SMM)',
							icon: <RecordVoiceOver style={{ fontSize: featuresFontSize }} />,
							description: `We create campaigns to help your business foster more audience. Our ads and posts will force the users to stop, look, engage, and interact while they are scrolling endlessly.`
						},
						{
							title: 'Online Reputation Management',
							icon: <Beenhere style={{ fontSize: featuresFontSize }} />,
							description: `ORM is about creating a unique brand perception amongst your users. On the one hand, we will promote the positives of your brand and on the other, protect your identity from negative reviews.`
						},
						{
							title: 'Content Writing Services',
							icon: <Toc style={{ fontSize: featuresFontSize }} />,
							description: `Content is the fuel for any marketing campaign. We create content that is engaging and resonates with your customer base. From simple blog posts to ebooks and social media, we cover every aspect of content creation.`
						},
						{
							title: 'Digital Consultancy',
							icon: <EmojiPeople style={{ fontSize: featuresFontSize }} />,
							description: `You can trust us to provide the right guidance for revamping your market presence. 
								We have dedicated digital marketing consultants who understand the market dynamics and curate actionable plans.`
						},
						{
							title: 'Experts Training',
							icon: <Group style={{ fontSize: featuresFontSize }} />,
							description: `Do you want us to train your in-house digital marketing executives? Why not? As the top digital marketing company, we would love to share our values and knowledge with your team. Let’s team up!`
						}
					]
				}
			},
			{
				title: 'Web-Design & Development',
				link: '/services/web-development',
				description: `The Internet opened up the world when social media expanded it. 
					We excel in both and deeply recognize the basic of creating the internet. 
					Unlike traditional digital marketing company, we focus on creating great web experience and analyzing the performance with an end-goal in mind. 
					We have a dedicated developers team consists of Consultants, Product Manager, UI Designer, 
					Front & Backend developers to either build a web project with the short-term goal & sustainable project with a long-term goal in mind.
					We follow both agile & waterfall process of development based on your desired project model.`,
				picture: '/Home/web.svg',
				shortdescription: 'Build your own website',
				icon: <Http style={{ fontSize: 110 }} />,
				features: {
					title: 'Why need us for your Website?',
					description: `UCT IT is a leading digital agency with website design and development expertise in Bangladesh. What makes us really different is, we are not just a traditional web development firm.

						We look into the client’s business goal with the site and make a website that’s business-ready. That means you don’t get a well-made and nice-looking website. But, also, the functionality and optimization are top-notch and we deliver the site in a way where you have all the necessary integration to start promoting your website right away.
					
						The philosophy we have behind this process is, we do not consider websites as an online brochure or showcase for your business. Your website should be way beyond your general identity. That is why we take all the requirements through our carefully made discovery form to understand what you want or can achieve from your website. After that, we provide a sitemap of your website – the structure which we are going to build and the ways your can achieve your short or long-term goal, and after that our signature process starts to work till we deliver the website to you which you can market right away.
					
						We provide all the necessary integrations along with your site from security to analytics, so you can provide a safe browsing experience to your user and measure what’s happening to your online traffic.
					
						Since we have expertise in online marketing. We focus on the real outcome of your business through the website and are able to provide consultation beyond a traditional web development firm that will only focus on the specific service to deliver you the website.
					
						We also provide automation service and manual maintenance of your site by our Q/A developers to make sure your site is functional and fully running with no issues when you’re spending your valuable ad budget on it. Even if you run into a problem, our flexible maintenance plan provides assurance to your service within an hour to 48 hours of time.`,
					featureslist: [
						{
							title: 'Web & SAAS Consulting',
							icon: <Public style={{ fontSize: featuresFontSize }} />,
							description: `With more than 6 years of consulting background in tech ventures, 
								our director & consultants have in-depth knowledge about building web tools & complex software projects for you.`
						},
						{
							title: 'Web UI & UX Design',
							icon: <Create style={{ fontSize: featuresFontSize }} />,
							description: `Would like to see how your developed website will look like & how it can impact your user’s attention? 
								We use industry leading tools like Sketch, Invision to wireframe, UI & UX for web & mobile.`
						},
						{
							title: 'Web Development',
							icon: <ViewQuilt style={{ fontSize: featuresFontSize }} />,
							description: `We specializes in most of the language web framework with more than 25+ completed project in last two years. 
								Our expert team & network of developers can build your dream machine for web.`
						},
						{
							title: 'Landing Page & Micro Site',
							icon: <Web style={{ fontSize: featuresFontSize }} />,
							description: `Landing page & micro site works as an engagement & lead generation platform for your online campaign. 
								These temporary sites are affordable yet effective to get visitors attention.`
						},
						{
							title: 'Mobile App Development',
							icon: <Apps style={{ fontSize: featuresFontSize }} />,
							description: `We have experienced app developer in our network with proven project to build your first app for Android or iOS.
								We can help with deploying the product in app store and extend the service with app marketing afterwards.`
						},
						{
							title: 'Chatbot & Communication',
							icon: <Chat style={{ fontSize: featuresFontSize }} />,
							description: `Chatbot & Conversion is the new-method of communication & marketing. 
								We can create both predictive model & Artificial intelligence to create web & social chatbot for your business.`
						}
					]
				}
			},
			{
				title: 'Video Editing',
				link: '/services/editing',
				description: 'Web, Social, Video & Print',
				picture: '/Home/video-editing.svg',
				shortdescription: 'Web, Social, Video & Print',
				icon: <OndemandVideo style={{ fontSize: 110 }} />
			},
			{
				title: 'Networking Services',
				link: '/services/networking',
				description: '',
				shortdescription: 'Social Media Strategy, Content, Campaign',
				icon: <CellWifi style={{ fontSize: 110 }} />
			},
			{
				title: 'ERP Software',
				link: '/services/erp',
				description: '',
				shortdescription: 'Manage your business with our ERP Software',
				icon: <Store style={{ fontSize: 110 }} />
			},
			{
				title: 'Computer & Laptop Servicing',
				link: '/services/servicing',
				description: '',
				shortdescription: 'Buy or Service your computer/laptop',
				icon: <Devices style={{ fontSize: 110 }} />
			},
		]
	return list;
}

const getServiceByLink = (link) => {
	const list = getServices();

	const item = list.find(item => (
		item.link === link
	));

	return item;
}

const service = { getServices, getServiceByLink };

export default service;