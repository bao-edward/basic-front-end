// function validator(option) {
//     //define function do something
//     function validate(inputElement, rule) {
//         //undefined or 'Vui long nhap...'
//         var errorMessage = rule.test(inputElement.value);
//         //ex: 123
//         var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
//         if(errorMessage) {
//             errorElement.innerText = errorMessage;
//             inputElement.parentElement.classList.add('invalid'); 
//         }
//         else {
//             errorElement.innerText = '';
//             inputElement.parentElement.classList.remove('invalid'); 
//         }
//     }

//     //get formElement
//     var formElement = document.querySelector(option.form);
//     if(formElement) {
//         //get inputElement
//         option.rule.forEach(function(rule) {
//             var inputElement = formElement.querySelector(rule.selector);
//             if(inputElement) {
//                 inputElement.onblur = function() {
//                     //do something
//                     validate(inputElement, rule);
//                 }
//             }
//         });
//     }
// }


// validator.isRequired = function(selector, message) {
//     return {
//         selector: selector,
//         test: function(value) {
//             return value.trim() ? undefined : message || 'vui lòng nhập trường này';
//         }
//     }
// }

// validator.isEmail = function(selector, message) {
//     return {
//         selector: selector,
//         test: function(value) {
//             const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return regex.test(value) ? undefined : message || 'trường này phải là Email';
//         }
//     }
// }

// validator.minLength = function(selector, min, message) {
//     return {
//         selector: selector,
//         test: function(value) {
//             return value.length >= min ? undefined : message || `vui lòng nhập tối thiểu ${min} ký tự`;
//         }
//     }
// }

// validator.isConfirmed = function(selector, getConfirmValue, message) {
//     return {
//         selector: selector,
//         test: function(value) {
//             return value === getConfirmValue() ? undefined : message ||'giá trị nhập vào chưa chính xác';

//         }
//     }
// }
validator.isRequired = function(selector, message) {
     return {
          selector: selector,
          test: function(value) {
               return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
          }
     }
}

validator.isEmail = function(selector, message) {
     return {
          selector: selector,
          test: function(value) {
               const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return regex.test(value) ? undefined : message || 'trường này phải là Email';
          }
     }
}

validator.isMinlength = function(selector, min, message) {
     return {
          selector: selector,
          test: function(value) {
               return value.length >= min? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
          }
     }
}

validator.isConfirmed = function(selector, getConfirmValue, message) {
     return {
          selector: selector,
          test: function(value) {
               return value ===  getConfirmValue() ? undefined : message || 'Mật khẩu không khớp';
          }
     }
}



function validator(option) {
     var selectorRules = {}; 
     function validate(inputElement, rule) {
          var errorMessage;
          var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
          var rules = selectorRules[rule.selector];
          for(var i = 0; i < rules.length; i++) {
               errorMessage = rules[i](inputElement.value);
               if (errorMessage) break;
          }
          
          if(errorMessage) {
               errorElement.innerText = errorMessage;
               inputElement.parentElement.classList.add('invalid');
          }
          else {
               errorElement.innerText = '';
               inputElement.parentElement.classList.remove('invalid');
          }
          return Boolean(errorMessage);
     }
     var formElement = document.querySelector(option.form);
     if(formElement) {
          //onsubmit
          formElement.onsubmit = function(e) {
               e.preventDefault();

               var isFormValid = true;
               option.rule.forEach(function(rule) {
                    var inputElement = formElement.querySelector(rule.selector);
                    //validate
                   var isValid = validate(inputElement, rule);
                   if(isValid) {
                        isFormValid = false;
                   }
               });
               var enableInputs = formElement.querySelectorAll('[name]:not([disable])');
               console.log(enableInputs);
               if(isFormValid) {
                    if(typeof option.onSubmit === 'function') {
                         
                    }
               }
          }
          option.rule.forEach(function(rule) {
               //save rules
               if(Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test);
               }
               else {
                    selectorRules[rule.selector] = [rule.test];
               }
               var inputElement = formElement.querySelector(rule.selector);
               if(inputElement) {
                    inputElement.onblur = function() {
                         //validate
                         validate(inputElement, rule);
                    }
               }
          });
     }
}





validator({
     form: '#form-1',
     errorSelector: '.form-message',
     rule: [
          validator.isRequired('#fullname'),
          validator.isRequired('#Email'),
          validator.isEmail('#Email'),
          validator.isRequired('#password'),
          validator.isMinlength('#password', 6),
          validator.isRequired('#password_confirmation'),
          validator.isConfirmed('#password_confirmation', getConfirmValue = function() {
               return document.querySelector('#form-1 #password').value;
          })
     ],
     onSubmit: function(data) {
          console.log(data);
     }
});


