//棒倒し法アルゴリズムで迷路生成
maze = function(h,w){
	var h = h;
	var w = w;

	this.make = function(){
	
		//gridを初期化
		var grid = new Array();
		for(var i = 0; i < h; i++){
			grid[i] = new Array();
			for(var j = 0; j < w; j++){
				if((i == 0 || i + 1 == h || j == 0 || j + 1 == w) || ((i % 2) == 0 && (j % 2) == 0)){
					grid[i][j] = 1;
				}else{
					grid[i][j] = 0;
				}
			}
		}

		//棒倒し！
		for(var i = 2; i + 2 < grid.length; i += 2){
			for(var j = 2; j + 2 < grid[i].length; j += 2){
				var set = 0;
				switch(Math.floor(Math.random() * 4 + 1)){
					//上
					case 1:
						if(grid[i-1][j] == 0 && i == 2){
							grid[i-1][j] = 1;
							set = 1;
						}
					break;
					//右
					case 2:
						if(grid[i][j+1] == 0){
							grid[i][j+1] = 1;
							set = 1;
						}
					break;
					//下
					case 3:
						if(grid[i+1][j] == 0){
							grid[i+1][j] = 1;
							set = 1;
						}
					break;
					//左
					case 4:
						if(grid[i][j-1] == 0){
							grid[i][j-1] = 1;
							set = 1;
						}
					break;
				}				
				if(set == 0){
					j -= 2;
				}
			}	
		}

		//ゴールとスタート
		grid[1][1] = 2;
		grid[h - 2][w - 2] = 3;
		
		//render
		for(var i = 0; i < grid.length; i++){
			for(var j = 0; j < grid[i].length; j++){
				//壁
				if(grid[i][j] == 1){
					$("#box").append('<img src="img/wall.gif" width="10" height="10" alt="" />')
				//スタート地点
				}else if(grid[i][j] == 2){
					$("#box").append('<img src="img/start.gif" width="10" height="10" alt="" />')
				//ゴール
				}else if(grid[i][j] == 3){
					$("#box").append('<img src="img/goal.gif" width="10" height="10" alt="" />')
				//道
				}else{
					$("#box").append('<img src="img/road.gif" width="10" height="10" alt="" />')
				}
			}
			$("#box").append("<br>")
		}		
		
	};
};

$(document).ready(function() {
	maze = new maze(31,31);
	maze.make();
});