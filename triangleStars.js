
<script>
const stars=function(n){
			if(n <= 0){
				return '';
			}
			return '*' + stars(n-1);
		}
		const spaces=function(n){
			if(n <= 0){
				return '';
			}
			return ' ' + spaces(n-1);
		}
		const run=function(n){
			if (n <= 0) {
				return;
			}
			run(n-1);
		}

			
		const run2=function(SpaceCount, StarCount, n){
			if (n===0){
				return;
			}
			console.log(spaces(SpaceCount)+stars(StarCount));
			run2(SpaceCount-1, StarCount+2, n-1);
			run(n-1,1,n);
		}
		const run1 = function(n) {
			run2( (n + n - 2)/2, 1, n);
		}

		run1(5);
</script>
