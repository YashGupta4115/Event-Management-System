import BarCharts from "../Charts/Bar/Bar";
import LineCharts from "../Charts/Line/Line";
import PieChartComponent from "../Charts/Pie/Pie";
import event1Image1 from '../Assests/events/birthdays/pexels-nietjuh-796606.jpg'
import event2Image1 from '../Assests/events/getTogether/pexels-valeriya-1123260.jpg'
import event3Image1 from '../Assests/events/wedding/pexels-charm-andaya-205356019-11652315.jpg'
import event4Image1 from '../Assests/events/birthdays/pexels-thirdman-7600421.jpg'

export const admindropDownData = [
    { label: 'Option 1', value: 'option1', route: 'adminDashBoard' },
    { label: 'Option 2', value: 'option2', route: 'adminDashBoard' },
    { label: 'Option 3', value: 'option3', route: 'adminDashBoard' },
]

export const adminDashBoardCards = [
    { title: 'Create Event', bgColor: '#FF6633', textBg: "#E64B17", route:'/add-event' },
    { title: 'Update Event Details', bgColor: '#8833FF', textBg: "#7919FF", route:'/update-event' },
    { title: 'Booking Notification', bgColor: '#29CC39', textBg: "#13BF24", route:'/booking-notification' },
    { title: 'Assign Services', bgColor: '#33BFFF', textBg: "#17A5E6", route:'/assign-service' },
    { title: 'Generate Report', bgColor: '#1A2233', textBg: "#26334D", route:'/generate-report' },
    { title: 'Monitor Event', bgColor: '#FFFFFF' , textBg: "#F7F8FA", route:'/monitor-event'},
    { title: 'Conduct Event Review', bgColor: '#FF6633', textBg: "#E64B17", route:'/event-review' },
    { title: 'Track Vendors Performance', bgColor: '#8833FF', textBg: "#7919FF", route:'/performance-measure' },
]

export const adminDashBoardCards2 = [
    { title: "User Stats", component: <BarCharts /> },
    { title: "Site Speed", component: <PieChartComponent /> },
    { title: "Statistics", component: <LineCharts /> },
    { title: "Latest Events", component: <BarCharts /> },
];

export const sampleEvents = [
    { title: "BirthDay",image:event1Image1, location: "Location 1", priceRange: "$50-$100" },
    { title: "Get Together",image:event2Image1, location: "Location 2", priceRange: "$150-$200"},
    { title: "Wedding",image:event3Image1, location: "Location 3", priceRange: "$250-$300"},
    { title: "Event 4",image:event4Image1, location: "Location 4", priceRange: "$350-$400" },
]

export const eventDesigns = [
    { title: "design1", image : "/", description: '1' },
    { title: "design2", image : "/", description: '2' },
    { title: "design3", image : "/", description: '3' }
]