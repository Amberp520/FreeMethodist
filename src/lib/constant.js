
import children1 from "../assets/ministries/children1.jpg"
import children2 from "../assets/ministries/children2.jpg"
import children3 from "../assets/ministries/children3.jpg"
import youth1 from "../assets/ministries/youth1.jpg"
import youth2 from "../assets/ministries/youth2.jpg"
import youth3 from "../assets/ministries/youth3.jpg"
import mission1 from "../assets/ministries/mission1.jpg"
import mission2 from "../assets/ministries/mission2.jpg"
import mission3 from "../assets/ministries/mission3.jpg"
import family1 from "../assets/ministries/family1.jpg"
import family2 from "../assets/ministries/family2.jpg"
import family3 from "../assets/ministries/family3.jpg"
import adult1 from "../assets/ministries/adult1.jpg"
import adult2 from "../assets/ministries/adult2.jpg"
import adult3 from "../assets/ministries/adult3.jpg"
import senior1 from "../assets/ministries/senior1.jpg"
import senior2 from "../assets/ministries/senior2.jpg"
import senior3 from "../assets/ministries/senior3.jpg"
import { FaBookBible, FaHandsPraying, FaPeopleGroup, FaPersonPraying } from "react-icons/fa6"
import { FaHandHoldingHeart, FaSeedling } from "react-icons/fa"


const ministries = [
    /* ───────── Children ───────── */
    {
        title: "Children",
        images: [
            children2,
            children1,
            children3
        ],
        welcomeMessage: `Welcome to our vibrant Children's Ministry, a place where young hearts and minds are nurtured in the love of Christ! We believe that every child is a precious gift from God, and we're committed to creating an environment where they can develop a personal relationship with Jesus while having an absolute blast. Our ministry serves children from birth through 5th grade with age-appropriate programming that makes learning about God exciting and relevant. Through interactive Bible stories that come to life, high-energy worship songs, creative crafts that reinforce biblical truths, and engaging games that build community, we make faith formation an adventure. Our team of background-checked, trained volunteers is passionate about partnering with parents to lay a strong spiritual foundation. We offer special events throughout the year like our annual Vacation Bible School, Christmas pageants, Easter celebrations, and family service projects. Our secure check-in system ensures your child's safety while they're in our care. Whether your child is taking their first steps of faith or growing deeper in their relationship with God, we're here to walk alongside your family on this incredible journey of discipleship.`,
        meetingTimes: "Sundays • 9 AM – 10:30 AM",
        schedule: [
            { day: "Sunday", time: "9:00 AM", activity: "Large-group worship & story" },
            { day: "Sunday", time: "9:45 AM", activity: "Small-group crafts & games" },
            { day: "Wednesday", time: "6:30 PM", activity: "Kids Club" }
        ],
        features: [
            "Interactive Stories",
            "Spirited Worship",
            "Creative Crafts",
            "Exciting Games",
            "Dedicated Volunteers",
            "Safe Environment",
            "Faith Development",
            "Friendship Building"
        ],
        featuresWriteup: "Everything we do is hands-on and age-appropriate—from lively storytelling and kid-led worship sets to craft stations, games, and caring volunteers—so children feel safe, make friends, and take their first steps with Jesus."
    },

    /* ───────── Youth ───────── */
    {
        title: "Youth",
        images: [
            youth1,
            youth2,
            youth3
        ],
        welcomeMessage: `Welcome to our dynamic Youth Ministry, where students in 6th through 12th grade are empowered to live out their faith with boldness and authenticity! In a world that's constantly pulling teenagers in different directions, we provide a safe haven where they can ask tough questions, wrestle with their beliefs, and discover what it truly means to follow Jesus. Our ministry combines high-energy worship experiences with deep, relevant biblical teaching that speaks directly to the challenges students face today. Through weekly small groups led by caring adult mentors, students build authentic relationships and find the support they need to navigate the complexities of adolescence. We believe in putting faith into action through local service projects, domestic mission trips, and global outreach opportunities that open students' eyes to God's heart for the world. Special events like winter retreats, summer camps, and leadership development programs help students grow in their spiritual gifts and develop a faith that lasts beyond their teenage years. Whether it's through our midweek gatherings, Sunday morning Bible studies, or spontaneous hangouts, we're committed to walking alongside students as they discover their God-given identity and purpose.`,
        meetingTimes: "Wednesdays • 7 PM – 8:45 PM",
        schedule: [
            { day: "Wednesday", time: "7:00 PM", activity: "Worship & message" },
            { day: "Wednesday", time: "7:45 PM", activity: "Grade-level small groups" },
            { day: "First Friday", time: "6:00 PM", activity: "Social / outreach event" }
        ],
        features: [
            "Student-Led Worship",
            "Relevant Teaching",
            "Small-Group Mentors",
            "Retreats & Camps",
            "Service Projects",
            "Safe Conversations",
            "Leadership Tracks"
        ],
        featuresWriteup: "From campfire worship sets to city-wide service days, youth experience high-energy gatherings and deep discipleship that equip them to live out their faith at school, online, and everywhere in between."
    },

    /* ───────── Mission ───────── */
    {
        title: "Mission",
        images: [
            mission1,
            mission2,
            mission3
        ],
        welcomeMessage: `Welcome to our Mission Ministry, the heartbeat of our church's call to be the hands and feet of Jesus in a broken world! Rooted in the Great Commission, we are passionately committed to making disciples of all nations, both in our local community and to the ends of the earth. Our ministry operates on three key fronts: local outreach, national partnerships, and global missions. Locally, we serve our neighbors through food distribution programs, homeless outreach, prison ministry, and partnerships with schools and community organizations. Nationally, we respond to disasters through trained response teams and support church planting efforts in strategic locations. Globally, we partner with long-term missionaries and indigenous ministries in over 15 countries, focusing on church planting, leadership development, and compassion ministry. We believe that every believer has a role to play in God's mission, and we provide numerous opportunities for both short-term mission experiences and long-term engagement. Through prayer, financial support, and hands-on service, we're seeing lives transformed by the power of the gospel. Whether you're called to go, send, or support, there's a place for you in God's global mission!`,
        meetingTimes: "First Sunday • 12:30 PM – 1:15 PM",
        schedule: [
            { day: "Monthly", time: "Varies", activity: "Local outreach projects" },
            { day: "Quarterly", time: "Varies", activity: "Short-term mission trips" },
            { day: "First Sunday", time: "12:30 PM", activity: "Mission lunch & prayer" }
        ],
        features: [
            "Local Outreach",
            "Global Partnerships",
            "Short-Term Trips",
            "Disaster Relief",
            "Prayer Support",
            "Training Workshops",
            "Compassion Projects"
        ],
        featuresWriteup: "Through hands-on service, financial support, and dedicated prayer, our mission teams bring practical help and the hope of the gospel to neighbors across the street and nations across the globe."
    },

    /* ───────── Family ───────── */
    {
        title: "Family",
        images: [
            family1,
            family2,
            family3
        ],
        welcomeMessage: `Welcome to our Family Ministry, where we're passionate about building strong, Christ-centered families that last for generations! We understand that parenting in today's world comes with unique challenges, and we're here to provide the support, resources, and community you need to thrive. Our ministry offers a comprehensive approach to family discipleship, equipping parents to be the primary spiritual influencers in their children's lives. Through our biblically-based parenting workshops, couples' retreats, and family devotion resources, we help you create a home where faith is both taught and caught. Our family-friendly events throughout the year—from summer picnics to holiday celebrations—create lasting memories and strengthen family bonds. We also provide specialized support for blended families, single parents, and those navigating adoption or foster care. Our dedicated team is committed to walking alongside you through every season of family life, from the sleepless nights of infancy to the complex transitions of the teenage years and beyond. Whether you're newlyweds, raising young children, or entering the empty nest phase, you'll find practical wisdom, authentic community, and Christ-centered hope to help your family flourish.`,
        meetingTimes: "Sundays • 10:45 AM – 12 PM",
        schedule: [
            { day: "Sunday", time: "10:45 AM", activity: "Family discipleship class" },
            { day: "Second Friday", time: "7:00 PM", activity: "Date-night childcare & marriage workshop" },
            { day: "Quarterly", time: "All day", activity: "Family fun day / picnic" }
        ],
        features: [
            "Marriage Enrichment",
            "Parenting Workshops",
            "Childcare Support",
            "Family Events",
            "Counseling Referrals",
            "Community Groups"
        ],
        featuresWriteup: "Whether you’re newly married, raising toddlers, or guiding teens, you’ll find practical teaching and supportive friendships that help your whole family grow closer to each other and to Christ."
    },

    /* ───────── Young Adults ───────── */
    {
        title: "Young Adults",
        images: [
            adult1,
            adult2,
            adult3
        ],
        welcomeMessage: `Welcome to our Young Adults Ministry, a thriving community designed specifically for those in their 20s and 30s navigating the exciting yet often challenging transition into adulthood! Whether you're a college student, young professional, single, or newly married, this is a place where you can be real, ask tough questions, and grow in your faith alongside peers who understand this unique season of life. Our ministry offers a blend of deep biblical teaching and authentic community that speaks directly to the issues young adults face today—career decisions, relationships, financial stewardship, mental health, and discovering your God-given purpose. Through our weekly gatherings, you'll experience powerful worship, relevant teaching, and small group discussions that foster genuine connections. We also provide mentorship opportunities with mature believers who can offer wisdom and guidance. Our social events range from outdoor adventures and game nights to service projects and cultural outings, creating spaces for fun and meaningful interactions. We believe that young adults aren't just the church of tomorrow but are vital to the church of today, and we're committed to equipping you to make an eternal impact in every sphere of influence God has placed you in.`,
        meetingTimes: "Thursdays • 7:30 PM – 9 PM",
        schedule: [
            { day: "Thursday", time: "7:30 PM", activity: "Bible study & discussion" },
            { day: "Monthly", time: "Saturday", activity: "Social / outdoor adventure" },
            { day: "Quarterly", time: "Friday-Saturday", activity: "Retreat / conference" }
        ],
        features: [
            "Authentic Community",
            "Relevant Teaching",
            "Service Opportunities",
            "Mentorship",
            "Retreats & Trips",
            "Career & Faith Talks"
        ],
        featuresWriteup: "We help emerging adults navigate work, relationships, and calling with a biblical worldview—mixing deep conversations with plenty of laughter and shared experiences."
    },

    /* ───────── Senior Adults ───────── */
    {
        title: "Senior Adults",
        images: [
            senior1,
            senior2,
            senior3
        ],
        welcomeMessage: `Welcome to our Senior Adults Ministry, where we honor and celebrate the rich legacy of faith, wisdom, and experience that our members bring to our church family! For those aged 60 and beyond, this ministry offers a vibrant community where you can continue growing in your relationship with Christ while enjoying meaningful fellowship with peers. We recognize that this season of life brings both unique joys and challenges, and we're committed to walking alongside you through all of them. Our weekly Bible studies dive deep into God's Word, offering fresh insights and practical applications for this stage of life. Our monthly luncheons and special events provide wonderful opportunities to build lasting friendships and share life together. We also organize day trips to local points of interest, seasonal outings, and even occasional extended travel opportunities for those who enjoy exploring new places. But this ministry isn't just about receiving—it's also about giving back. We believe that our senior adults have an incredible wealth of wisdom and experience to share, which is why we facilitate intergenerational mentoring opportunities, prayer partnerships, and service projects that allow you to leave a lasting legacy. Whether you're newly retired, enjoying grandparenthood, or navigating the transitions that come with aging, you'll find a warm welcome and a place to belong in our Senior Adults Ministry.`,
        meetingTimes: "Tuesdays • 10 AM – 11:30 AM",
        schedule: [
            { day: "Tuesday", time: "10:00 AM", activity: "Devotional & prayer" },
            { day: "Third Thursday", time: "11:30 AM", activity: "Friendship luncheon" },
            { day: "Bi-Annual", time: "Varies", activity: "Day trips & sightseeing" }
        ],
        features: [
            "Bible Studies",
            "Fellowship Luncheons",
            "Prayer Support",
            "Mentoring",
            "Care & Visitation",
            "Travel & Outings"
        ],
        featuresWriteup: "From warm fellowship gatherings to mentoring younger families, seniors find purpose, community, and continued growth in Christ during this rich season of life."
    }
];

const coreValues = [
    {
        title: "Biblical Teaching",
        description: "We are committed to the authority of Scripture and teach the Bible as God's inspired Word, relevant for all of life.",
        Icon: FaBookBible
    },
    {
        title: "Authentic Worship",
        description: "We seek to glorify God through heartfelt worship that engages the whole person in spirit and truth.",
        Icon: FaHandsPraying
    },
    {
        title: "Intentional Discipleship",
        description: "We are dedicated to helping believers grow in their faith and become fully devoted followers of Christ.",
        Icon: FaPersonPraying
    },
    {
        title: "Genuine Community",
        description: "We value authentic relationships where people can belong, grow, and serve together in Christ's love.",
        Icon: FaPeopleGroup
    },
    {
        title: "Compassionate Outreach",
        description: "We demonstrate God's love through practical acts of service and sharing the gospel locally and globally.",
        Icon: FaHandHoldingHeart
    },
    {
        title: "Spiritual Growth",
        description: "We encourage continuous spiritual development through prayer, study, and life transformation in Christ.",
        Icon: FaSeedling
    }
];

export { ministries, coreValues };
