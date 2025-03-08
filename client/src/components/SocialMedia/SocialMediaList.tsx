type SocialMediaListProps = {
	facebook?: string;
	twitter?: string;
	instagram?: string;
	linkedin?: string;
};

export default function SocialMediaList({
	facebook,
	twitter,
	instagram,
	linkedin,
}: SocialMediaListProps) {
	return (
		<div className="tags-and-share">
			<div className="row align-items-center">
				<div className="share">
					<ul>
						{facebook && (
							<li>
								<a href={facebook}>
									<i className="flaticon-facebook" />
								</a>
							</li>
						)}
						{twitter && (
							<li>
								<a href={twitter}>
									<i className="flaticon-twitter" />
								</a>
							</li>
						)}
						{instagram && (
							<li>
								<a href={instagram}>
									<i className="flaticon-instagram" />
								</a>
							</li>
						)}
						{linkedin && (
							<li>
								<a href={linkedin}>
									<i className="flaticon-linkedin" />
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
