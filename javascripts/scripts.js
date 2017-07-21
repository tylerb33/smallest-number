console.log ("works");

// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

let number = 1

for (i = 1; i <= 10000; i++) {
	if (i % 1 === 0) {
		if (i % 2 === 0) {
			if (i % 3 === 0) {
				if (i % 4 === 0) {
					if (i % 5 === 0) {
						if (i % 6 === 0) {
							if (i % 7 === 0) {
								if (i % 8 === 0) {
									if (i % 9 === 0) {
										if (i % 10 === 0) {
											console.log("ANSWER", i);
											break;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
