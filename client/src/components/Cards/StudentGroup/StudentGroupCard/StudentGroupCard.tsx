import SocialMediaList from '@components/SocialMedia/SocialMediaList';

import { SocialMediaEnum } from '@data/_centralized/groups/studentsGroups.data';
import type { StudentGroup } from '@data/_types/types';

type StudentGroupCardProps = {
	group: StudentGroup;
};

export default function StudentGroupCard({ group }: StudentGroupCardProps) {
	const faculty = new URLSearchParams(window.location.search).get('faculty');

	if (faculty && group.faculty !== faculty) {
		return null;
	}

	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-news-card">
				<div className="news-img text-center">
					<a href={group.path}>
						<img
							src={group.logo}
							alt={group.title}
							width={250}
							height={250}
							decoding="async"
							loading="lazy"
						/>
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<a href={group.path}>
							<h3 className="text-center">{group.title}</h3>
						</a>
						<p className="text-center">
							{group.shortDescription && group.shortDescription.length > 300
								? `${group.shortDescription.substring(0, 300)}...`
								: group.shortDescription}
						</p>
					</div>
				</div>
				<SocialMediaList
					facebook={group.socialMedia?.[SocialMediaEnum.FACEBOOK]?.link}
					twitter={group.socialMedia?.[SocialMediaEnum.TWITTER]?.link}
					instagram={group.socialMedia?.[SocialMediaEnum.INSTAGRAM]?.link}
					linkedin={group.socialMedia?.[SocialMediaEnum.LINKEDIN]?.link}
				/>
			</div>
		</div>
	);
}
