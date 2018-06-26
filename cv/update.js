// const fs = require('fs')
import fs from 'fs'
import {
    about,
    skills,
    projects,
} from './content'

let output = ''
const template = fs.readFileSync(`${__dirname}/template.md`).toString()
const PROFILE_TEXT = '%PROFILE_TEXT%'
const SKILLS_LIST = '%SKILLS_LIST%'
const EXPERIENCE_LIST = '%EXPERIENCE_LIST%'

output = template.replace(PROFILE_TEXT, about.intros.join('\n\n'))

const skillsOutput = skills.technical
    .concat(skills.supplementary)
    .join('\n- ')
output = output.replace(SKILLS_LIST, `- ${skillsOutput}`)

const experienceOutput = skills.commercial.map(
    item => `${item.description} ${item.companyName} - ${item.dateRange}`,
)
output = output.replace(EXPERIENCE_LIST, `- ${experienceOutput.join('\n- ')}`)

// TODO make it write to cv.md
console.log(output)
