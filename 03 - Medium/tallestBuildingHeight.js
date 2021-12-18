const tallestBuildingHeight = (floors) => {
  const charMap = {};

  for (const floor of floors) {
    [...floor].forEach((f,i) => charMap[i] = f == '#' ? charMap[i] + 1 || 1 : null);
  }
  
  return `${Math.max(...Object.values(charMap)) * 20}m`;
}

// Tests

console.log(tallestBuildingHeight([
	"         ",
	" ##      ",
	" ##      ",
	"###   ## ",
	"###   ## ",
	"###   ###",
	"###   ###"
]), "120m")

console.log(tallestBuildingHeight([
	"            ##",
	"            ##",
	"            ##",
	"###   ###   ##",
	"###   ###   ###",
	"###   ###   ###",
	"###   ###   ###"
]), "140m")

console.log(tallestBuildingHeight([
	"               ",
	"               ",
	"               ",
	"       #    ###",
	"      # #   ###",
	"###   ###   ###",
	"###   ###   ###"
]), "80m")

console.log(tallestBuildingHeight([
	"               ",
	"               ",
	"               ",
	"               ",
	"               ",
	"###   ###   ###",
	"###   ###   ###"
]), "40m")

console.log(tallestBuildingHeight([
	"                  ",
	" #                ",
	" #     #          ",
	"###    #    ###   ",
	"###   # #   ###   #",
	"###   ###   ###   #",
	"###   ###   ###   #"
]), "120m")

console.log(tallestBuildingHeight([
	"          ",
	"###   # # ",
	"###   ### ",
	"###   ### "
]), "60m")

console.log(tallestBuildingHeight([
	"###                    #####  ",
	"###      #             #####  ",
	"###     ###            #####  ",
	"######  ###            #######",
	"######  ######  ###    #######",
	"###################    #######",
	"###############################",
	"###############################"
]), "160m")

console.log(tallestBuildingHeight([
	"                              ",
	"                              ",
	"                              ",
	"###                    #####  ",
	"###      #             #####  ",
	"###     ###            #####  ",
	"######  ###            #######",
	"######  ######  ###    #######",
	"###################    #######",
	"###############################",
	"###############################"
]), "160m")

console.log(tallestBuildingHeight([
	"                              ",
	"                         ###  ",
	"                         ###  ",
	"###                    #####  ",
	"###      #             #####  ",
	"###     ###            #####  ",
	"######  ###            #######",
	"######  ######  ###    #######",
	"###################    #######",
	"###############################",
	"###############################"
]), "200m")

// made by @Joshua Señoron
