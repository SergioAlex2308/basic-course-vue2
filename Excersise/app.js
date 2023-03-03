new Vue({
	el: '#app',
	
	data () {
	  return {
		title: '',
		time: null,
		courses: [],
		totalTime: 0,
		course: {
			courseTitle: '',
			courseTime: 0
		}
	  }
	},
	
	computed: {},
	
	methods: {
		addCourse () {
			this.course = {
				courseTitle: this.title,
				courseTime: +this.time,
			}
			this.courses.push(this.course);
			console.log(this.course.courseTime);
			this.addTime();
		},
		addTime () {
			this.courses.forEach(course => {
				this.totalTime += course.courseTime;
				console.log(typeof(course.courseTime));
			});
		}
	}
  });