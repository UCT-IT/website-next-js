import service from "../../App/Functions/service";

const getNavBarContents = () => {
	const services = service.getServices();

	const list =
		[
			{
				title: 'Home',
				link: '/'
			},
			{
				title: 'About Us',
				link: '/about'
			},
			{
				title: 'Our Services',
				link: '/services',
				subitems: services
			},
			{
				title: 'Contact Us',
				link: '/contact'
			}
		]
	return list;
}

export default getNavBarContents;