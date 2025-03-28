import React from "react";
import IssueCard from "./IssueCard";
import { IssueCardProps } from "../../types";
import "./Platform.css";

// Define a type for issues with detailed content
interface IssueWithDetail extends IssueCardProps {
	detailedContent: React.ReactNode;
	detailedTitle?: string;
}

const Platform: React.FC = () => {
	const issues: IssueWithDetail[] = [
		{
			icon: "faGlobe",
			title: "International Trade",
			description: "All major parties seem to think Canada needs a trade war. The PPC disagrees. The USA will tax their citizens for our imports regardless—we need to stop treating ourselves like a US mining colony; diversify our production and partners; and start consuming what we produce to come out ahead.",
			detailedTitle: "The Trade War Hurts Everyone",
			detailedContent: (
				<>

					<h3>Tariffs Aren't About Trump's Demands</h3>
					<p>Trump's tariffs aren't simply bullying—they're about funding the USA, as he said <a href="https://youtu.be/MhlakXbewcM" target="_blank" rel="noopener noreferrer">in his inauguration speech</a>. In the 19th century, tariffs covered up to 95% of government revenue, with no income tax. That's his goal. He uses fentanyl as an excuse to make Canada fund his border security and cites our banking rules to boost US banks. Canadian leaders scramble to comply, but the tariffs won't stop—there's always a new demand, from fentanyl to banking access and beyond. Meeting his asks changes nothing; he's stringing us along while we bend over backwards. He literally wrote the book on this.</p>

					<h3>The PPC Stands Alone Against the Trade War</h3>
					<p>This isn't a war we need to fight. We just need to avoid self-inflicted wounds. Counter-tariffs, favored by all parties except the PPC, sound tough but hurt us more. However, there's a better way: vertical integration at home. Instead of exporting raw materials and importing finished goods, let's manufacture here, keeping jobs and money in Canada. A concept that doesn't boad well with established special interest groups and their political benefactors.</p>
					<p>Counter-tariffs double our pain. We pay once when the USA taxes our raw exports, then again when our own government taxes imports of finished products. That drives up prices on everyday goods, costing families immeasurably. There is no way to "win" this. As your MP, I won't play Trump's game or tax you twice—I'll fight to strengthen Canada by making things here.</p>

					<h3>Our Elected Leaders Have it All Wrong</h3>

					<p>The trade war is a disaster we don't need. The PPC has a better way—free trade, less dependence on the USA, and an economy built for Canadians, not corporations.</p>
				</>
			)
		},
		{
			icon: "faShoppingCart",
			title: "Costs and Food Prices",
			description: "From cellular service to milk, Canadians are tired of overpaying. Our government's solution to high prices has always been corporate handouts, but all this does is create monopolies that rip us off. We routinely pay double what Americans pay. It's time to break up these cozy deals, cut costs, and make our economy work for us, not just insiders.",
			detailedTitle: "Government Meddling Makes Food Expensive",
			detailedContent: (
				<>
					<h3>Let's Stop Supporting Cartels</h3>
					<p>Canada's dairy industry is one of many <strong>cartels</strong> that has infected our government under the guise of something called "supply management." In reality, it's a <strong>racket</strong> that forces farmers to waste milk, cull livestock, punishes the innocent, and treats cheese like contraband. Dairy farmers are given a quota for how much milk they can produce. When they exceed that quota, they are forced to <strong>dump milk</strong>. Remeber this viedo next time you're being ripped off at the grocery store.</p>

					<iframe width="560" height="315" src="https://www.youtube.com/embed/qzF3R2xe65o?si=SiWdmdBTKhwhp4Wa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

					<p>These cartels have teeth. In 2019 Greek Orthodox nuns were fined $75,000 by dairy producers for selling milk without permission (<a href="https://www.cbc.ca/news/canada/montreal/nuns-milk-fine-1.5343543" target="_blank" rel="noopener">CBC News</a>), and a man smuggling cheese faced a $30,000 fine (<a href="https://nationalpost.com/news/canada/man-fined-30000-for-smuggling-almost-4000-kg-of-cheese-into-canada" target="_blank" rel="noopener">National Post</a>). The message to Canadians is clear: "compete with us, and we'll ruin your life". It's as if our country is being run by gangsters. It's a system rigged designed to maximize corporate profits using artificial shortages, all protected by the government. Unfortunately, these cartels are supported by every major party, including the Conservative Party of Canada. It's politically corrupt, and morally bankrupt.</p>

					<h3>Vote for Change</h3>
					<p>The PPC is the only party in Canada that is unilaterally against cartels. As your MP, I will fight against all forms of protectionism and corporate handouts so that our economy can be powered by a free and open merit-based market.</p>
				</>
			)
		},
		// Add detailed content for the remaining issues
		{
			icon: "faLeaf",
			title: "Environment",
			description: "Carbon taxes crush small businesses and ship pollution abroad. Costly climate policies fail as global emissions climb. Poor nations pollute out of necessity. The PPC's plan: prioritize economic growth. A prosperous Canada can lead environmentally—without job losses or tax hikes.",
			detailedTitle: "PPC's Economic Focus Beats the Climate Agenda",
			detailedContent: (
				<>
					<h3>Carbon Policies Hurt Jobs and Increase Global Pollution</h3>
					<p>Carbon taxes and emissions caps kill small businesses, spike costs, and cut jobs in industries like farming and manufacturing. They also push companies overseas to more pollutive countries, raising global pollution via "carbon leakage".</p>

					<h3>What is Carbon Leakage, and How Does it Happen?</h3>
					<p>Consider a Canadian steel manufacturer. Faced with rising carbon taxes at home, they decide to relocate production to India, where energy costs are lower and environmental regulations are less stringent. While Canada's emissions might decrease on paper, India's emissions increase even more because they rely on coal-fired power plants. Finished products are shipped accross the ocean on cargo ships that burn massive amounts of oil. The net effect is that global pollution rises. This isn't just a hypothetical scenario—research from <a href="https://oxfordtax.sbs.ox.ac.uk/article/global-spillovers-carbon-taxes-how-emissions-leak-developing-conuntries" target="_blank" rel="noopener noreferrer">Oxford University</a> shows that European carbon policies led to a 5% increase in emissions in Africa as multinational firms shifted production to avoid higher costs. Our policies, intended to save the planet, might actually be making the problem worse.</p>

					<h3>The Climate Agenda's Hidden Costs and the PPC's Solution</h3>
					<p>Canada's pricey green policies—taxes, renewable subsidies—hit households hard, especially lower-income ones, while global emissions climb, led by developing nations like China and India (57% of CO2, <a href="https://www.visualcapitalist.com/co2-emissions-by-income/" target="_blank" rel="noopener noreferrer" >Visual Capitalist</a>). Going green is a luxury poor countries can't afford; they prioritize cheap energy to grow. Ironically, these policies weaken us without denting the biggest polluters. Politicians dodge accountability—like blaming forest fires on climate change instead of bad management (<a href="https://www.cbc.ca/news/canada/north/fire-paradox-northern-wildfire-management-1.5707176" target="_blank" rel="noopener noreferrer">CBC News</a>)—while carbon leakage and costs mock the agenda's goals. The PPC says: grow the economy first. Wealthy nations cut emissions through prosperity and innovation (<a href="https://ourworldindata.org/co2-emissions" target="_blank" rel="noopener noreferrer">Our World in Data</a>). A strong Canada can lead on the environment without breaking the bank or exporting jobs.</p>
				</>
			)
		},
		// Add remaining items with detailed content...
		{
			icon: "faHospital",
			title: "Healthcare, Housing, and Infrastructure",
			description: "Our healthcare waits are long, housing is unaffordable, and roads are clogged because rapid population growth hasn't come with a plan. I'm all for welcoming newcomers, but we need to build homes, hospitals, and infrastructure first—not just pile pressure on what's already stretched thin.",
			detailedContent: (
				<>

				</>
			)
		},
		{
			icon: "faShieldAlt",
			title: "Crime",
			description: "Crime's rising, and Canadians deserve to feel safe. We'll crack down on repeat offenders and deport non-citizen criminals while giving law-abiding folks the right to protect themselves. However, we also need to tackle the root causes—more jobs and opportunities so that fewer people turn to crime in the first place.",
			detailedContent: (
				<>

				</>
			)
		},
		{
			icon: "faBalanceScale",
			title: "Corruption in Ottawa and Propaganda",
			description: "Since 2015, Ottawa has handed over $4B to big media. Your tax dollars shouldn't fund cozy insider deals; we need a free press that holds politicians accountable, not a government mouthpiece. As your MP, I'll fight corruption head-on, starting with transparency.",
			detailedContent: (
				<>

				</>
			)
		}
	];

	return (
		<section id="platform" className="container">
			<h2 className="section-title">Platform & Issues</h2>
			<div className="platform">
				{issues.map((issue, index) => (
					<IssueCard
						key={index}
						icon={issue.icon}
						title={issue.title}
						description={issue.description}
						detailedTitle={issue.detailedTitle}
						detailedContent={issue.detailedContent}
					/>
				))}
			</div>

			<div className="highlight">
				<h3>Bottom Line — Canadians Deserve a Choice</h3>
				<p>The Liberals and Conservatives keep recycling the same tired ideas, but Canada deserves better. We're not doomed—we can have a stronger, fairer country. Open your mind, talk to your neighbours, and let's <b>break the uniparty grip</b> together.</p>
			</div>
		</section>
	);
};

export default Platform;