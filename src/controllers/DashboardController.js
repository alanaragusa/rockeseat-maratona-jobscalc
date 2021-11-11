const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')

module.exports = {
    index(req, res) {
        const jobs = Job.get();
        const profile = Profile.get();    
    
            const updatedJobs = jobs.map((job) => {
                //ajustes do job //
                const remaining = JobUtils.remainingDays(job)
                const status = remaining <= 0 ? 'done' : 'progress'
            
                return {
                    ...job, // pegou tudo do objeto job lá de cima //
                    remaining,
                    status,
                    budget: JobUtils.calculateBudget(job, profile["value-hour"])
                }
            })

            return res.render("index", {jobs: updatedJobs, profile: profile})
    },
};