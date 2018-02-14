IF((Opens) > 0, Opens / {Goal Completions}, 0.0)


IF({Goal Percent} < 0, "Error!",IF({Goal Percent} < 20, " Disappointing expectations ",IF({Goal Percent} < 40, "Under Expectations",IF({Goal Percent} < 60,"At Expectations",IF({Goal Percent} < 80,"Above expectations",IF({Goal Percent} <= 100, "Exceeds expectations","Error!"))))))


IF(
	{Open Rate} < 0, "Error!",
	IF(
		{Open Rate} < {Open Rate Poor Top}, " Disappointing expectations ",
			IF(
				{Open Rate} < 40, "Under Expectations",
					IF(
						{Open Rate} < 60,"At Expectations",
							IF(
								{Open Rate} < 80,"Above expectations",
									IF(
										{Goal Percent} <= 100, "Exceeds expectations","Error!"
									)
							)
					)
			)
	)
)



IF({Open Rate} < 0, "Error!",IF({Open Rate} < {Open Rate Poor Top}, " Disappointing expectations ",IF({Open Rate} < {Open Rate Okay Top},"At expectations",IF({Open Rate} >= {Open Rate Okay Top}, "Exceeds expectations","Error!"))))


IF({Click Rate} < 0, "Error!",IF({Click Rate} < {Click Rate Poor Top}, " Disappointing expectations ",IF({Click Rate} < {Click Rate Okay Top},"At expectations",IF({Click Rate} >= {Click Rate Okay Top}, "Exceeds expectations","Error!"))))




IF( {Click Rate Weighted}+{Goal Rate Weighted}+{Open Rate Weighted} < .8, " Disappointing expectations ",IF({Click Rate Weighted}+{Goal Rate Weighted}+{Open Rate Weighted} < 1.2, " At expectations ",IF({Click Rate Weighted}+{Goal Rate Weighted}+{Open Rate Weighted} >= 1.2, " Exceeds expectations ","Error!")))

IF( {Engagement Weighted}+{Goal Rate Weighted}+{Pages Weighted} < .8, " Disappointing expectations ",IF({Engagement Weighted}+{Goal Rate Weighted}+{Pages Weighted} < 1.2, " At expectations ",IF({Engagement Weighted}+{Goal Rate Weighted}+{Pages Weighted} >= 1.2, " Exceeds expectations ","Error!")))




IF({Open Rate} > 0, IF( {Click Rate Weighted}+{Goal Rate Weighted}+{Open Rate Weighted} < .8, " Disappointing expectations ",IF({Click Rate Weighted}+{Goal Rate Weighted}+{Open Rate Weighted} < 1.2, " At expectations ",IF({Click Rate Weighted}+{Goal Rate Weighted}+{Open Rate Weighted} >= 1.2, " Exceeds expectations ","Error!"))) , IF({Pages Per Visit} > 0, IF( {Engagement Weighted}+{Goal Rate Weighted}+{Pages Weighted} < .8, " Disappointing expectations ",IF({Engagement Weighted}+{Goal Rate Weighted}+{Pages Weighted} < 1.2, " At expectations ",IF({Engagement Weighted}+{Goal Rate Weighted}+{Pages Weighted} >= 1.2, " Exceeds expectations ","Error!"))), "Error!"))