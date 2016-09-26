
<script>

const stars=function(n){
			if(n <= 0){
				return'';
			}
			return '*' + stars(n-1);
		}
const spaces=function(n){
			if(n <= 0){
				return'';
			}
			return ' ' + spaces(n-1);
		}

			
const run=function(SpaceCount, StarCount, n){
			if (n===0){
				return;
			}
			console.log(spaces(SpaceCount)+stars(StarCount));
			run(SpaceCount-1, StarCount+2, n-1);
			
		}
const triangleStars = function(n) {
			run(n-1, 1, n);
		}

		triangleStars(7);
</script>