import React from 'react';
// import skills data
import { skills } from '../data';
const Skills = () => {
return (
<section id='skills' className='section bg-
[#f8f3eca1] pb-32'>
<div className="container mx-auto text-center">
<h2 className='text-5x1 font-primary
font-extrabold mb-4'>
What we do
</h2>
<p className='max-w-[540px] mx-auto px-6
1g:px-0 mb-[60px]'>
Aklank Jain & Associates, led by Mr. Aklank Kumar Jain with 25 years of experience, is a law firm at Allahabad High Court specializing in litigation across multiple tribunals including DRT, DRAT, and NCLT. The firm offers comprehensive legal services, tailored to clients' needs, with a focus on excellence, integrity, and justice. Their skilled team is dedicated to fighting for legal rights in various practice areas.
</p>
{/* skills grid */}
<div className='lg:grid lg:grid-cols-3 gap-12'>

{skills.map((item, index) => {
const { icon, title, description } = item;
return (
<div className='flex flex-col
items-center justify-center mb-16
last:mb-0 lg:mb-0'>
<img className="mb-6" src={icon} alt='' />
<h4 className='text-2x1 mb-2
font-primary font-bold'>{title}</h4>

<p className='max-w-[332px] lg:max-w-
[350px]'>{description}</p>

</div>
);
})}
</div>
</div>

</section>
);
};
export default Skills;