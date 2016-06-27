var utilApp = angular.module('ut.utils', []);

utilApp.directive('tableCopy', ['$compile', function($compile) {

	return {
		scope: {
			tableId: '@',
			ignoreColumns: '='
		},
		restrict: 'A',

		link: function(scope, element, attr) {
			// Copy the argument into clipboard	
			var copy = function(content) {
				var copyElement = document.createElement('textarea');
				copyElement.value = content;
				copyElement = document.body.appendChild(copyElement);
				copyElement.select();
				try {
					if (!document.execCommand('copy')) throw 'Not allowed.';
				} catch (e) {
					copyElement.remove();
					console.log("document.execCommand('copy'); is not supported");
					prompt('Copy the text below. (ctrl c, enter)', text);
				} finally {
					if (typeof e == 'undefined') {
						copyElement.remove();
					}
				}
			}

			// Event Handler to perform the table copy
			var onHandleClick = function() {

				var tableContent = "";

				if (!scope.ignoreColumns) scope.ignoreColumns = [];

				var elem = document.getElementById(scope.tableId);
				var rows = angular.element(elem).find('tr');
				for (var i = 0; i < rows.length; i++) {

					var rowContent = angular.element(rows[i]).find('td');
					var text = [];

					for (var j = 0; j < rowContent.length; j++) {
						if (scope.ignoreColumns.indexOf(j) == -1)
							text.push(angular.element(rowContent[j]).text());
					}

					tableContent = tableContent + text.join(',')
					tableContent = tableContent + "\n";
				}
				copy(tableContent)

			}

			element.bind("click", onHandleClick)
			
		},


	}
}]);