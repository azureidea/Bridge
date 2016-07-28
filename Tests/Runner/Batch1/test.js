﻿(function (globals) {
    
    Bridge.define('Bridge.Test.Assert', {
        statics: {
            assert: null,
            async: function () {
                return Bridge.Test.Assert.assert.async();
            },
            areEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected);
            },
            areDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
            },
            areStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.strictEqual(actual, expected);
            },
            areStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.strictEqual(actual, expected, description);
            },
            areNotEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotDeepEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
            },
            areNotDeepEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
            },
            areNotStrictEqual: function (expected, actual) {
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected);
            },
            areNotStrictEqual$1: function (expected, actual, description) {
                Bridge.Test.Assert.assert.notStrictEqual(actual, expected, description);
            },
            true: function (condition) {
                Bridge.Test.Assert.assert.ok(condition);
            },
            true$1: function (condition, message) {
                Bridge.Test.Assert.assert.ok(condition, message);
            },
            false: function (condition) {
                Bridge.Test.Assert.assert.notOk(condition);
            },
            false$1: function (condition, message) {
                Bridge.Test.Assert.assert.notOk(condition, message);
            },
            fail: function () {
                Bridge.Test.Assert.assert.ok(false);
            },
            fail$1: function (message) {
                Bridge.Test.Assert.assert.notOk(true, message);
            },
            throws: function (block) {
                Bridge.Test.Assert.assert.throws(block, "");
            },
            throws$5: function (block, message) {
                Bridge.Test.Assert.assert.throws(block, message);
            },
            throws$6: function (T, block) {
                Bridge.Test.Assert.throws$7(T, block, "");
            },
            throws$7: function (T, block, message) {
                var actual = null;
                var expected = Bridge.getTypeName(T);
    
                try {
                    block();
                }
                catch (ex) {
                    ex = System.Exception.create(ex);
                    actual = Bridge.getTypeName(ex);
                }
    
                if (!Bridge.referenceEquals(actual, expected)) {
                    Bridge.Test.Assert.assert.equal(actual, expected, message);
                }
                else  {
                    Bridge.Test.Assert.assert.ok(true, message);
                }
            },
            throws$3: function (block, expected) {
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$4: function (block, expected, message) {
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            throws$1: function (block, expected) {
                Bridge.Test.Assert.assert.throws(block, expected);
            },
            throws$2: function (block, expected, message) {
                Bridge.Test.Assert.assert.throws(block, expected, message);
            },
            null: function (anObject) {
                Bridge.Test.Assert.assert.ok(anObject == null);
            },
            null$1: function (anObject, message) {
                Bridge.Test.Assert.assert.ok(anObject == null, message);
            },
            notNull: function (anObject) {
                Bridge.Test.Assert.assert.notOk(anObject == null);
            },
            notNull$1: function (anObject, message) {
                Bridge.Test.Assert.assert.notOk(anObject == null, message);
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestFixture$1', function (T) { return {
        statics: {
            instanceFabric: null,
            fixtureFabric: Bridge.getDefaultValue(T),
            getFixtureFabric: function () {
                if (Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = new T();
                }
    
                return Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric;
            },
            setFixtureFabric: function (value) {
                Bridge.Test.QUnit.TestFixture$1(T).fixtureFabric = value;
            },
            instanceFabric$1: function (type) {
                if (Bridge.Test.QUnit.TestFixture$1(T).instanceFabric == null) {
                    Bridge.Test.QUnit.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.QUnit.TestFixture$1(T));
                }
    
                return Bridge.Test.QUnit.TestFixture$1(T).instanceFabric;
            },
            beforeTest: function (needInstance, assert, type, expectedCount) {
                if (expectedCount === void 0) { expectedCount = null; }
                Bridge.Test.Assert.assert = assert;
    
                if (System.Nullable.hasValue(expectedCount)) {
                    assert.expect(System.Nullable.getValue(expectedCount));
                }
    
                var instance = Bridge.Test.QUnit.TestFixture$1(T).instanceFabric$1(type);
                instance.setFixture(needInstance ? Bridge.Test.QUnit.TestFixture$1(T).getFixtureFabric() : Bridge.getDefaultValue(T));
    
                try {
                    instance.setUp();
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    assert.ok(false, "The test failed SetUp");
    
                    throw $e1;
                }
    
                return instance;
            }
        },
        config: {
            properties: {
                Fixture: Bridge.getDefaultValue(T)
            }
        },
        setUp: function () {
        },
        tearDown: function () {
        }
    }; });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                QUnit.module("C#");
                QUnit.test("Abstract types - TestB", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass.testB);
                QUnit.test("Abstract types - TestC", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass.testC);
                QUnit.test("Abstract types - TestBC", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass.testBC);
                QUnit.test("Enum - TestParse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testParse);
                QUnit.test("Enum - TestParseIgnoreCase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testParseIgnoreCase);
                QUnit.test("Enum - TestToString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testToString);
                QUnit.test("Enum - TestGetValues", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testGetValues);
                QUnit.test("Enum - TestCompareTo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testCompareTo);
                QUnit.test("Enum - TestFormat", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testFormat);
                QUnit.test("Enum - TestGetName", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testGetName);
                QUnit.test("Enum - TestGetNames", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testGetNames);
                QUnit.test("Enum - TestHasFlag", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testHasFlag);
                QUnit.test("Enum - TestIsDefined", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testIsDefined);
                QUnit.test("Enum - TestTryParse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum.testTryParse);
                QUnit.test("Static overloads - TestA", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance.testA);
                QUnit.test("Static overloads - TestB", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance.testB);
                QUnit.test("Static overloads - TestAB", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance.testAB);
                QUnit.test("Interfaces - TestInterfaceMethodAndProperty", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces.testInterfaceMethodAndProperty);
                QUnit.test("Interfaces - TestExplicitInterfaceMethodAndProperty", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces.testExplicitInterfaceMethodAndProperty);
                QUnit.test("Interfaces - TestTwoInterfaces", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces.testTwoInterfaces);
                QUnit.test("Method parameters - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestMethodParametersClass.test);
                QUnit.test("Instance overloads - TestInstance", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadInstanceMethods.testInstance);
                QUnit.test("Static overloads - TestStatic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadStaticMethods.testStatic);
                QUnit.test("Reference types - TestInstanceConstructorsAndMethods", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes.testInstanceConstructorsAndMethods);
                QUnit.test("Reference types - TestStaticConstructorsAndMethods", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes.testStaticConstructorsAndMethods);
                QUnit.test("Reference types - TestMethodParameters", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes.testMethodParameters);
                QUnit.test("Try/Catch - SimpleTryCatch", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks.simpleTryCatch);
                QUnit.test("Try/Catch - CaughtExceptions", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks.caughtExceptions);
                QUnit.test("Try/Catch - ThrownExceptions", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks.thrownExceptions);
                QUnit.test("Try/Catch - Bridge320", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks.bridge320);
                QUnit.test("Try/Catch - Bridge343", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks.bridge343);
                QUnit.test("Try/Catch/Finally - SimpleTryCatchFinally", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks.simpleTryCatchFinally);
                QUnit.test("Try/Catch/Finally - CaughtExceptions", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks.caughtExceptions);
                QUnit.test("Try/Catch/Finally - ThrownExceptions", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks.thrownExceptions);
                QUnit.test("Value types - TestInstanceConstructorsAndMethods", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes.testInstanceConstructorsAndMethods);
                QUnit.test("Value types - TestStaticConstructorsAndMethods", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes.testStaticConstructorsAndMethods);
                QUnit.test("Virtual methods - TestB", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestVirtualMethods.testB);
                QUnit.test("Auto properties - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestAutoProps.testBasic);
                QUnit.test("Await in catch and finally - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestAwaitInCatchFinally.testBasic);
                QUnit.test("ConditionAccess - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestConditionAccess.testBasic);
                QUnit.test("Exception filter - TestFalseFilter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExceptionFilter.testFalseFilter);
                QUnit.test("Exception filter - TestTrueFilter", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExceptionFilter.testTrueFilter);
                QUnit.test("Expression-bodied function members - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExpressionBodyFunction.testBasic);
                QUnit.test("Index initializer - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestIndexInitializer.testBasic);
                QUnit.test("Interpolated Strings - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestInterpolatedStrings.testBasic);
                QUnit.test("NameOf - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestNameOf.testBasic);
                QUnit.test("Using static - TestBasic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestUsingStatic.testBasic);
                QUnit.module("Checked/Unckecked");
                QUnit.test("CheckedInsideUnchecked - TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests.testInt32);
                QUnit.test("CheckedInsideUnchecked - TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests.testUInt32);
                QUnit.test("CheckedInsideUnchecked - TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests.testLong);
                QUnit.test("CheckedInsideUnchecked - TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests.testULong);
                QUnit.test("Checked - TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests.testInt32);
                QUnit.test("Checked - TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests.testUInt32);
                QUnit.test("Checked - TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests.testLong);
                QUnit.test("Checked - TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests.testULong);
                QUnit.test("UncheckedInsideChecked - TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests.testInt32);
                QUnit.test("UncheckedInsideChecked - TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests.testUInt32);
                QUnit.test("UncheckedInsideChecked - TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests.testLong);
                QUnit.test("UncheckedInsideChecked - TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests.testULong);
                QUnit.test("Unchecked - TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests.testInt32);
                QUnit.test("Unchecked - TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests.testUInt32);
                QUnit.test("Unchecked - TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests.testLong);
                QUnit.test("Unchecked - TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests.testULong);
                QUnit.test("WithNoUncheckedKeyword - TestInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests.testInt32);
                QUnit.test("WithNoUncheckedKeyword - TestUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests.testUInt32);
                QUnit.test("WithNoUncheckedKeyword - TestLong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests.testLong);
                QUnit.test("WithNoUncheckedKeyword - TestULong", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests.testULong);
                QUnit.module("Collections");
                QUnit.test("Array - Set1 TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.typePropertiesAreCorrect);
                QUnit.test("Array - Set1 LengthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.lengthWorks);
                QUnit.test("Array - Set1 RankIsOne", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.rankIsOne);
                QUnit.test("Array - Set1 GetLengthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.getLengthWorks);
                QUnit.test("Array - Set1 GetLowerBound", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.getLowerBound);
                QUnit.test("Array - Set1 GetUpperBoundWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.getUpperBoundWorks);
                QUnit.test("Array - Set1 GettingValueByIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.gettingValueByIndexWorks);
                QUnit.test("Array - Set1 GetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.getValueWorks);
                QUnit.test("Array - Set1 SettingValueByIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.settingValueByIndexWorks);
                QUnit.test("Array - Set1 SetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.setValueWorks);
                QUnit.test("Array - Set1 ForeachWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.foreachWorks);
                QUnit.test("Array - Set1 CloneWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.cloneWorks);
                QUnit.test("Array - Set1 ConcatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.concatWorks);
                QUnit.test("Array - Set1 ContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.containsWorks);
                QUnit.test("Array - Set1 ContainsUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.containsUsesEqualsMethod);
                QUnit.test("Array - Set1 AllWithArrayItemFilterCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.allWithArrayItemFilterCallbackWorks);
                QUnit.test("Array - Set1 SliceWithoutEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sliceWithoutEndWorks);
                QUnit.test("Array - Set1 ForeachWithArrayItemCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.foreachWithArrayItemCallbackWorks);
                QUnit.test("Array - Set1 ForeachWithArrayCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.foreachWithArrayCallbackWorks);
                QUnit.test("Array - Set1 IndexOfWithoutStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.indexOfWithoutStartIndexWorks);
                QUnit.test("Array - Set1 IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("Array - Set1 IndexOfWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.indexOfWithStartIndexWorks);
                QUnit.test("Array - Set1 JoinWithoutDelimiterWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.joinWithoutDelimiterWorks);
                QUnit.test("Array - Set1 ReverseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.reverseWorks);
                QUnit.test("Array - Set1 AnyWithArrayItemFilterCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.anyWithArrayItemFilterCallbackWorks);
                QUnit.test("Array - Set1 BinarySearch1Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.binarySearch1Works);
                QUnit.test("Array - Set1 BinarySearch2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.binarySearch2Works);
                QUnit.test("Array - Set1 BinarySearch3Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.binarySearch3Works);
                QUnit.test("Array - Set1 BinarySearch4Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.binarySearch4Works);
                QUnit.test("Array - Set1 BinarySearchExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.binarySearchExceptionsWorks);
                QUnit.test("Array - Set1 SortWithDefaultCompareWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sortWithDefaultCompareWorks);
                QUnit.test("Array - Set1 Sort1Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sort1Works);
                QUnit.test("Array - Set1 Sort2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sort2Works);
                QUnit.test("Array - Set1 Sort3Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sort3Works);
                QUnit.test("Array - Set1 Sort4Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sort4Works);
                QUnit.test("Array - Set1 SortExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.sortExceptionsWorks);
                QUnit.test("Array - Set1 ForeachWhenCastToIListWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.foreachWhenCastToIListWorks);
                QUnit.test("Array - Set1 ICollectionCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iCollectionCountWorks);
                QUnit.test("Array - Set1 ICollectionAddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iCollectionAddWorks);
                QUnit.test("Array - Set1 ICollectionClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iCollectionClearWorks);
                QUnit.test("Array - Set1 ICollectionContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iCollectionContainsWorks);
                QUnit.test("Array - Set1 ICollectionContainsUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iCollectionContainsUsesEqualsMethod);
                QUnit.test("Array - Set1 ICollectionRemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iCollectionRemoveWorks);
                QUnit.test("Array - Set1 IListIndexingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iListIndexingWorks);
                QUnit.test("Array - Set1 IListIndexOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iListIndexOfWorks);
                QUnit.test("Array - Set1 IListIndexOfUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iListIndexOfUsesEqualsMethod);
                QUnit.test("Array - Set1 IListInsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iListInsertWorks);
                QUnit.test("Array - Set1 IListRemoveAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1.iListRemoveAtWorks);
                QUnit.test("Array - Set2 TestArrayAsIListOfT", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testArrayAsIListOfT);
                QUnit.test("Array - Set2 TestTrivials", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testTrivials);
                QUnit.test("Array - Set2 TestGetAndSetValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testGetAndSetValue);
                QUnit.test("Array - Set2 TestClear", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testClear);
                QUnit.test("Array - Set2 TestCopy_GCRef", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testCopy_GCRef);
                QUnit.test("Array - Set2 TestCopy_VTToObj", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testCopy_VTToObj);
                QUnit.test("Array - Set2 TestCopy_VTWithGCRef", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testCopy_VTWithGCRef);
                QUnit.test("Array - Set2 TestCopy_VTNoGCRef", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testCopy_VTNoGCRef);
                QUnit.test("Array - Set2 TestFind", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testFind);
                QUnit.test("Array - Set2 TestForEach", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testForEach);
                QUnit.test("Array - Set2 TestGetEnumerator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testGetEnumerator);
                QUnit.test("Array - Set2 TestIndexOf", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testIndexOf);
                QUnit.test("Array - Set2 TestLastIndexOf", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testLastIndexOf);
                QUnit.test("Array - Set2 TestResize", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testResize);
                QUnit.test("Array - Set2 TestReverse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testReverse);
                QUnit.test("Array - Set2 TestSort", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testSort);
                QUnit.test("Array - Set2 TestTrueForAll", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testTrueForAll);
                QUnit.test("Array - Set2 TestSetValueCasting", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testSetValueCasting);
                QUnit.test("Array - Set2 TestValueTypeToReferenceCopy", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testValueTypeToReferenceCopy);
                QUnit.test("Array - Set2 TestReferenceToValueTypeCopy", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testReferenceToValueTypeCopy);
                QUnit.test("Array - Set2 TestArrayConstructionMultidimArrays", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2.testArrayConstructionMultidimArrays);
                QUnit.test("GenericDictionary - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.typePropertiesAreCorrect);
                QUnit.test("GenericDictionary - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.defaultConstructorWorks);
                QUnit.test("GenericDictionary - CapacityConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.capacityConstructorWorks);
                QUnit.test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.capacityAndEqualityComparerWorks);
                QUnit.test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.equalityComparerOnlyConstructorWorks);
                QUnit.test("GenericDictionary - CountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.countWorks);
                QUnit.test("GenericDictionary - KeysWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.keysWorks);
                QUnit.test("GenericDictionary - ValuesWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.valuesWorks);
                QUnit.test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.indexerGetterWorksForExistingItems);
                QUnit.test("GenericDictionary - IndexerSetterWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.indexerSetterWorks);
                QUnit.test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.indexerGetterThrowsForNonExistingItems);
                QUnit.test("GenericDictionary - AddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.addWorks);
                QUnit.test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.addThrowsIfItemAlreadyExists);
                QUnit.test("GenericDictionary - ClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.clearWorks);
                QUnit.test("GenericDictionary - ContainsKeyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.containsKeyWorks);
                QUnit.test("GenericDictionary - EnumeratingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.enumeratingWorks);
                QUnit.test("GenericDictionary - RemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.removeWorks);
                QUnit.test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.tryGetValueWithIntKeysWorks);
                QUnit.test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.tryGetValueWithObjectKeysWorks);
                QUnit.test("GenericDictionary - CanUseCustomComparer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests.canUseCustomComparer);
                QUnit.test("ICollection - ArrayImplementsICollection", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.arrayImplementsICollection);
                QUnit.test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.customClassThatShouldImplementICollectionDoesSo);
                QUnit.test("ICollection - ArrayCastToICollectionCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.arrayCastToICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionCastToICollectionCountWorks);
                QUnit.test("ICollection - ClassImplementingICollectionAddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionAddWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionCastToICollectionAddWorks);
                QUnit.test("ICollection - ClassImplementingICollectionClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionClearWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionCastToICollectionClearWorks);
                QUnit.test("ICollection - ArrayCastToICollectionContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.arrayCastToICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionCastToICollectionContainsWorks);
                QUnit.test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionRemoveWorks);
                QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests.classImplementingICollectionCastToICollectionRemoveWorks);
                QUnit.test("IDictionary - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.typePropertiesAreCorrect);
                QUnit.test("IDictionary - ClassImplementsInterfaces", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.classImplementsInterfaces);
                QUnit.test("IDictionary - CountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.countWorks);
                QUnit.test("IDictionary - KeysWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.keysWorks);
                QUnit.test("IDictionary - GetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.getItemWorks);
                QUnit.test("IDictionary - ValuesWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.valuesWorks);
                QUnit.test("IDictionary - ContainsKeyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.containsKeyWorks);
                QUnit.test("IDictionary - TryGetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.tryGetValueWorks);
                QUnit.test("IDictionary - AddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.addWorks);
                QUnit.test("IDictionary - ClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.clearWorks);
                QUnit.test("IDictionary - RemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.removeWorks);
                QUnit.test("IDictionary - SetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests.setItemWorks);
                QUnit.test("IEnumerable - ArrayImplementsIEnumerable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests.arrayImplementsIEnumerable);
                QUnit.test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests.customClassThatShouldImplementIEnumerableDoesSo);
                QUnit.test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests.arrayGetEnumeratorMethodWorks);
                QUnit.test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests.arrayCastToIEnumerableCanBeEnumerated);
                QUnit.test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests.classImplementingIEnumerableCanBeEnumerated);
                QUnit.test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
                QUnit.test("IList - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.typePropertiesAreCorrect);
                QUnit.test("IList - ArrayImplementsIList", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.arrayImplementsIList);
                QUnit.test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.customClassThatShouldImplementIListDoesSo);
                QUnit.test("IList - ArrayCastToIListGetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.arrayCastToIListGetItemWorks);
                QUnit.test("IList - ClassImplementingIListGetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListGetItemWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListGetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListCastToIListGetItemWorks);
                QUnit.test("IList - ArrayCastToIListSetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.arrayCastToIListSetItemWorks);
                QUnit.test("IList - ClassImplementingIListSetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListSetItemWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListSetItemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListCastToIListSetItemWorks);
                QUnit.test("IList - ArrayCastToIListIndexOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.arrayCastToIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListIndexOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListCastToIListIndexOfWorks);
                QUnit.test("IList - ClassImplementingIListInsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListInsertWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListCastToIListInsertWorks);
                QUnit.test("IList - ClassImplementingIListRemoveAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListRemoveAtWorks);
                QUnit.test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests.classImplementingIListCastToIListRemoveAtWorks);
                QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
                QUnit.test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.enumeratingIEnumeratorIteratorToEndWorks);
                QUnit.test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
                QUnit.test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.enumeratingIEnumerableIteratorToEndWorks);
                QUnit.test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
                QUnit.test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
                QUnit.test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
                QUnit.test("List - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.typePropertiesAreCorrect);
                QUnit.test("List - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.defaultConstructorWorks);
                QUnit.test("List - ConstructorWithCapacityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.constructorWithCapacityWorks);
                QUnit.test("List - ConstructingFromArrayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.constructingFromArrayWorks);
                QUnit.test("List - ConstructingFromListWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.constructingFromListWorks);
                QUnit.test("List - ConstructingFromIEnumerableWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.constructingFromIEnumerableWorks);
                QUnit.test("List - CountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.countWorks);
                QUnit.test("List - IndexingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.indexingWorks);
                QUnit.test("List - ForeachWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.foreachWorks);
                QUnit.test("List - GetEnumeratorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.getEnumeratorWorks);
                QUnit.test("List - AddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.addWorks);
                QUnit.test("List - AddRangeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.addRangeWorks);
                QUnit.test("List - BinarySearch1Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.binarySearch1Works);
                QUnit.test("List - BinarySearch2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.binarySearch2Works);
                QUnit.test("List - BinarySearch3Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.binarySearch3Works);
                QUnit.test("List - BinarySearch4Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.binarySearch4Works);
                QUnit.test("List - ClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.clearWorks);
                QUnit.test("List - ContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.containsWorks);
                QUnit.test("List - ContainsUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.containsUsesEqualsMethod);
                QUnit.test("List - SliceWithoutEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.sliceWithoutEndWorks);
                QUnit.test("List - SliceWithEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.sliceWithEndWorks);
                QUnit.test("List - ForeachWithListItemCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.foreachWithListItemCallbackWorks);
                QUnit.test("List - ForeachWithListCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.foreachWithListCallbackWorks);
                QUnit.test("List - IndexOfWithoutStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.indexOfWithoutStartIndexWorks);
                QUnit.test("List - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.indexOfWithoutStartIndexUsesEqualsMethod);
                QUnit.test("List - IndexOfWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.indexOfWithStartIndexWorks);
                QUnit.test("List - IndexOfWithStartIndexUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.indexOfWithStartIndexUsesEqualsMethod);
                QUnit.test("List - InsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.insertWorks);
                QUnit.test("List - InsertRangeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.insertRangeWorks);
                QUnit.test("List - JoinWithoutDelimiterWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.joinWithoutDelimiterWorks);
                QUnit.test("List - JoinWithDelimiterWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.joinWithDelimiterWorks);
                QUnit.test("List - RemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.removeWorks);
                QUnit.test("List - RemoveReturnsFalseIfTheElementWasNotFound", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.removeReturnsFalseIfTheElementWasNotFound);
                QUnit.test("List - RemoveCanRemoveNullItem", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.removeCanRemoveNullItem);
                QUnit.test("List - RemoveUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.removeUsesEqualsMethod);
                QUnit.test("List - RemoveAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.removeAtWorks);
                QUnit.test("List - RemoveRangeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.removeRangeWorks);
                QUnit.test("List - ReverseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.reverseWorks);
                QUnit.test("List - SortWithDefaultCompareWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.sortWithDefaultCompareWorks);
                QUnit.test("List - SortWithCompareCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.sortWithCompareCallbackWorks);
                QUnit.test("List - SortWithIComparerWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.sortWithIComparerWorks);
                QUnit.test("List - ForeachWhenCastToIEnumerableWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.foreachWhenCastToIEnumerableWorks);
                QUnit.test("List - IEnumerableGetEnumeratorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iEnumerableGetEnumeratorWorks);
                QUnit.test("List - ICollectionCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionCountWorks);
                QUnit.test("List - ICollectionAddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionAddWorks);
                QUnit.test("List - ICollectionClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionClearWorks);
                QUnit.test("List - ICollectionContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionContainsWorks);
                QUnit.test("List - ICollectionContainsUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionContainsUsesEqualsMethod);
                QUnit.test("List - ICollectionRemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionRemoveWorks);
                QUnit.test("List - ICollectionRemoveCanRemoveNullItem", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionRemoveCanRemoveNullItem);
                QUnit.test("List - ICollectionRemoveUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iCollectionRemoveUsesEqualsMethod);
                QUnit.test("List - IListIndexingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iListIndexingWorks);
                QUnit.test("List - IListIndexOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iListIndexOfWorks);
                QUnit.test("List - IListIndexOfUsesEqualsMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iListIndexOfUsesEqualsMethod);
                QUnit.test("List - IListInsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iListInsertWorks);
                QUnit.test("List - IListRemoveAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.iListRemoveAtWorks);
                QUnit.test("List - ToArrayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests.toArrayWorks);
                QUnit.test("MultidimArray - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.typePropertiesAreCorrect);
                QUnit.test("MultidimArray - LengthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.lengthWorks);
                QUnit.test("MultidimArray - GetValueWorksForUninitializedElement", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getValueWorksForUninitializedElement);
                QUnit.test("MultidimArray - GetValueByIndexWorksForUninitializedElement", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getValueByIndexWorksForUninitializedElement);
                QUnit.test("MultidimArray - SettingValueByIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.settingValueByIndexWorks);
                QUnit.test("MultidimArray - SetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.setValueWorks);
                QUnit.test("MultidimArray - GetValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getValueWorks);
                QUnit.test("MultidimArray - GettingValueByIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.gettingValueByIndexWorks);
                QUnit.test("MultidimArray - GetLengthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getLengthWorks);
                QUnit.test("MultidimArray - GetLowerBoundWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getLowerBoundWorks);
                QUnit.test("MultidimArray - GetUpperBoundWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getUpperBoundWorks);
                QUnit.test("MultidimArray - ForeachWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.foreachWorks);
                QUnit.test("MultidimArray - RankWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.rankWorks);
                QUnit.test("MultidimArray - GetValueWithIndexOutOfRangeThrowsAnException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.getValueWithIndexOutOfRangeThrowsAnException);
                QUnit.test("MultidimArray - SetValueWithIndexOutOfRangeThrowsAnException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests.setValueWithIndexOutOfRangeThrowsAnException);
                QUnit.module("Comparer");
                QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests.typePropertiesAreCorrect);
                QUnit.test("DefaultComparerCanOrderNumbers", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests.defaultComparerCanOrderNumbers);
                QUnit.test("DefaultComparerCanOrderNullValues", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests.defaultComparerCanOrderNullValues);
                QUnit.test("DefaultComparerUsesCompareMethodIfClassImplementsIComparable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests.defaultComparerUsesCompareMethodIfClassImplementsIComparable);
                QUnit.test("CreateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests.createWorks);
                QUnit.module("Convert");
                QUnit.test("Convert.FromBase64 - Roundtrip1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtrip1);
                QUnit.test("Convert.FromBase64 - Roundtrip2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtrip2);
                QUnit.test("Convert.FromBase64 - Roundtrip3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtrip3);
                QUnit.test("Convert.FromBase64 - EmptyString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.emptyString);
                QUnit.test("Convert.FromBase64 - ZeroLengthArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.zeroLengthArray);
                QUnit.test("Convert.FromBase64 - RoundtripWithPadding1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithPadding1);
                QUnit.test("Convert.FromBase64 - RoundtripWithPadding2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithPadding2);
                QUnit.test("Convert.FromBase64 - PartialRoundtripWithPadding1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.partialRoundtripWithPadding1);
                QUnit.test("Convert.FromBase64 - PartialRoundtripWithPadding2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.partialRoundtripWithPadding2);
                QUnit.test("Convert.FromBase64 - ParseWithWhitespace", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.parseWithWhitespace);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithWhitespace2);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithWhitespace3);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithWhitespace4);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace5", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithWhitespace5);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace6", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithWhitespace6);
                QUnit.test("Convert.FromBase64 - RoundtripWithWhitespace7", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripWithWhitespace7);
                QUnit.test("Convert.FromBase64 - RoundtripLargeString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.roundtripLargeString);
                QUnit.test("Convert.FromBase64 - InvalidOffset", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.invalidOffset);
                QUnit.test("Convert.FromBase64 - InvalidLength", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.invalidLength);
                QUnit.test("Convert.FromBase64 - InvalidInput", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.invalidInput);
                QUnit.test("Convert.FromBase64 - InvalidCharactersInInput", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests.invalidCharactersInInput);
                QUnit.test("Convert.ToBase64CharArray - ValidOffsetIn", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.validOffsetIn);
                QUnit.test("Convert.ToBase64CharArray - ShortInputArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.shortInputArray);
                QUnit.test("Convert.ToBase64CharArray - ValidOffsetOut", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.validOffsetOut);
                QUnit.test("Convert.ToBase64CharArray - InvalidInputBuffer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.invalidInputBuffer);
                QUnit.test("Convert.ToBase64CharArray - InvalidOutputBuffer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.invalidOutputBuffer);
                QUnit.test("Convert.ToBase64CharArray - InvalidOffsetIn", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.invalidOffsetIn);
                QUnit.test("Convert.ToBase64CharArray - InvalidOffsetOut", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.invalidOffsetOut);
                QUnit.test("Convert.ToBase64CharArray - InvalidInputLength", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests.invalidInputLength);
                QUnit.test("Convert.ToBase64String - KnownByteSequence", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests.knownByteSequence);
                QUnit.test("Convert.ToBase64String - ZeroLength", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests.zeroLength);
                QUnit.test("Convert.ToBase64String - InvalidInputBuffer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests.invalidInputBuffer);
                QUnit.test("Convert.ToBase64String - InvalidOffset", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests.invalidOffset);
                QUnit.test("Convert.ToBase64String - InvalidLength", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests.invalidLength);
                QUnit.test("Convert.ToString - FromBoxedObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromBoxedObject);
                QUnit.test("Convert.ToString - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromObject);
                QUnit.test("Convert.ToString - FromDateTime", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromDateTime);
                QUnit.test("Convert.ToString - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromChar);
                QUnit.test("Convert.ToString - FromByteBase2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromByteBase2);
                QUnit.test("Convert.ToString - FromByteBase8", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromByteBase8);
                QUnit.test("Convert.ToString - FromByteBase10", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromByteBase10);
                QUnit.test("Convert.ToString - FromByteBase16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromByteBase16);
                QUnit.test("Convert.ToString - FromByteInvalidBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromByteInvalidBase);
                QUnit.test("Convert.ToString - FromInt16Base2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt16Base2);
                QUnit.test("Convert.ToString - FromInt16Base8", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt16Base8);
                QUnit.test("Convert.ToString - FromInt16Base10", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt16Base10);
                QUnit.test("Convert.ToString - FromInt16Base16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt16Base16);
                QUnit.test("Convert.ToString - FromInt16InvalidBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt16InvalidBase);
                QUnit.test("Convert.ToString - FromInt32Base2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt32Base2);
                QUnit.test("Convert.ToString - FromInt32Base8", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt32Base8);
                QUnit.test("Convert.ToString - FromInt32Base10", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt32Base10);
                QUnit.test("Convert.ToString - FromInt32Base16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt32Base16);
                QUnit.test("Convert.ToString - FromInt32InvalidBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt32InvalidBase);
                QUnit.test("Convert.ToString - FromInt64Base2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt64Base2);
                QUnit.test("Convert.ToString - FromInt64Base8", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt64Base8);
                QUnit.test("Convert.ToString - FromInt64Base10", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt64Base10);
                QUnit.test("Convert.ToString - FromInt64Base16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt64Base16);
                QUnit.test("Convert.ToString - FromInt64InvalidBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt64InvalidBase);
                QUnit.test("Convert.ToString - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromBoolean);
                QUnit.test("Convert.ToString - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromSByte);
                QUnit.test("Convert.ToString - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromByte);
                QUnit.test("Convert.ToString - FromInt16Array", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt16Array);
                QUnit.test("Convert.ToString - FromUInt16Array", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromUInt16Array);
                QUnit.test("Convert.ToString - FromInt32Array", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt32Array);
                QUnit.test("Convert.ToString - FromUInt32Array", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromUInt32Array);
                QUnit.test("Convert.ToString - FromInt64Array", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromInt64Array);
                QUnit.test("Convert.ToString - FromUInt64Array", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromUInt64Array);
                QUnit.test("Convert.ToString - FromSingleArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromSingleArray);
                QUnit.test("Convert.ToString - FromDoubleArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromDoubleArray);
                QUnit.test("Convert.ToString - FromDecimalArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromDecimalArray);
                QUnit.test("Convert.ToString - FromDateTimeArray", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromDateTimeArray);
                QUnit.test("Convert.ToString - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromString);
                QUnit.test("Convert.ToString - FromIFormattable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromIFormattable);
                QUnit.test("Convert.ToString - FromNonIConvertible", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests.fromNonIConvertible);
                QUnit.test("Convert.ToBoolean - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromBoolean);
                QUnit.test("Convert.ToBoolean - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromByte);
                QUnit.test("Convert.ToBoolean - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromDecimal);
                QUnit.test("Convert.ToBoolean - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromDouble);
                QUnit.test("Convert.ToBoolean - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromInt16);
                QUnit.test("Convert.ToBoolean - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromInt32);
                QUnit.test("Convert.ToBoolean - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromInt64);
                QUnit.test("Convert.ToBoolean - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromString);
                QUnit.test("Convert.ToBoolean - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromObject);
                QUnit.test("Convert.ToBoolean - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromSByte);
                QUnit.test("Convert.ToBoolean - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromSingle);
                QUnit.test("Convert.ToBoolean - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromUInt16);
                QUnit.test("Convert.ToBoolean - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromUInt32);
                QUnit.test("Convert.ToBoolean - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests.fromUInt64);
                QUnit.test("Convert.ToByte - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromBoolean);
                QUnit.test("Convert.ToByte - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromChar);
                QUnit.test("Convert.ToByte - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromDecimal);
                QUnit.test("Convert.ToByte - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromDouble);
                QUnit.test("Convert.ToByte - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromInt16);
                QUnit.test("Convert.ToByte - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromInt32);
                QUnit.test("Convert.ToByte - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromInt64);
                QUnit.test("Convert.ToByte - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromObject);
                QUnit.test("Convert.ToByte - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromSByte);
                QUnit.test("Convert.ToByte - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromSingle);
                QUnit.test("Convert.ToByte - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromString);
                QUnit.test("Convert.ToByte - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromStringWithBase);
                QUnit.test("Convert.ToByte - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromUInt16);
                QUnit.test("Convert.ToByte - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromUInt32);
                QUnit.test("Convert.ToByte - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests.fromUInt64);
                QUnit.test("Convert.ToChar - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromByte);
                QUnit.test("Convert.ToChar - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromChar);
                QUnit.test("Convert.ToChar - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromDecimal);
                QUnit.test("Convert.ToChar - FromDecimalViaObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromDecimalViaObject);
                QUnit.test("Convert.ToChar - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromDouble);
                QUnit.test("Convert.ToChar - FromDoubleViaObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromDoubleViaObject);
                QUnit.test("Convert.ToChar - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromInt16);
                QUnit.test("Convert.ToChar - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromInt32);
                QUnit.test("Convert.ToChar - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromInt64);
                QUnit.test("Convert.ToChar - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromObject);
                QUnit.test("Convert.ToChar - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromSByte);
                QUnit.test("Convert.ToChar - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromSingle);
                QUnit.test("Convert.ToChar - FromSingleViaObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromSingleViaObject);
                QUnit.test("Convert.ToChar - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromString);
                QUnit.test("Convert.ToChar - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromUInt16);
                QUnit.test("Convert.ToChar - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromUInt32);
                QUnit.test("Convert.ToChar - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests.fromUInt64);
                QUnit.test("Convert.ToDateTime - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromString);
                QUnit.test("Convert.ToDateTime - FromStringWithCustomFormatProvider", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromStringWithCustomFormatProvider);
                QUnit.test("Convert.ToDateTime - FromDateTime", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromDateTime);
                QUnit.test("Convert.ToDateTime - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromObject);
                QUnit.test("Convert.ToDateTime - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromBoolean);
                QUnit.test("Convert.ToDateTime - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromChar);
                QUnit.test("Convert.ToDateTime - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromInt16);
                QUnit.test("Convert.ToDateTime - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromInt32);
                QUnit.test("Convert.ToDateTime - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromInt64);
                QUnit.test("Convert.ToDateTime - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromUInt16);
                QUnit.test("Convert.ToDateTime - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromUInt32);
                QUnit.test("Convert.ToDateTime - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromUInt64);
                QUnit.test("Convert.ToDateTime - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromSingle);
                QUnit.test("Convert.ToDateTime - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromDouble);
                QUnit.test("Convert.ToDateTime - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests.fromDecimal);
                QUnit.test("Convert.ToDecimal - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromBoolean);
                QUnit.test("Convert.ToDecimal - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromByte);
                QUnit.test("Convert.ToDecimal - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromDecimal);
                QUnit.test("Convert.ToDecimal - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromDouble);
                QUnit.test("Convert.ToDecimal - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromInt16);
                QUnit.test("Convert.ToDecimal - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromInt32);
                QUnit.test("Convert.ToDecimal - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromInt64);
                QUnit.test("Convert.ToDecimal - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromObject);
                QUnit.test("Convert.ToDecimal - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromSByte);
                QUnit.test("Convert.ToDecimal - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromSingle);
                QUnit.test("Convert.ToDecimal - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromString);
                QUnit.test("Convert.ToDecimal - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromUInt16);
                QUnit.test("Convert.ToDecimal - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromUInt32);
                QUnit.test("Convert.ToDecimal - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests.fromUInt64);
                QUnit.test("Convert.ToDouble - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromBoolean);
                QUnit.test("Convert.ToDouble - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromByte);
                QUnit.test("Convert.ToDouble - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromDecimal);
                QUnit.test("Convert.ToDouble - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromDouble);
                QUnit.test("Convert.ToDouble - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromInt16);
                QUnit.test("Convert.ToDouble - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromInt32);
                QUnit.test("Convert.ToDouble - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromInt64);
                QUnit.test("Convert.ToDouble - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromObject);
                QUnit.test("Convert.ToDouble - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromSByte);
                QUnit.test("Convert.ToDouble - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromSingle);
                QUnit.test("Convert.ToDouble - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromString);
                QUnit.test("Convert.ToDouble - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromUInt16);
                QUnit.test("Convert.ToDouble - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromUInt32);
                QUnit.test("Convert.ToDouble - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests.fromUInt64);
                QUnit.test("Convert.ToInt16 - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromBoolean);
                QUnit.test("Convert.ToInt16 - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromByte);
                QUnit.test("Convert.ToInt16 - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromChar);
                QUnit.test("Convert.ToInt16 - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromDecimal);
                QUnit.test("Convert.ToInt16 - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromDouble);
                QUnit.test("Convert.ToInt16 - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromInt16);
                QUnit.test("Convert.ToInt16 - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromInt32);
                QUnit.test("Convert.ToInt16 - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromInt64);
                QUnit.test("Convert.ToInt16 - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromObject);
                QUnit.test("Convert.ToInt16 - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromSByte);
                QUnit.test("Convert.ToInt16 - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromSingle);
                QUnit.test("Convert.ToInt16 - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromString);
                QUnit.test("Convert.ToInt16 - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromStringWithBase);
                QUnit.test("Convert.ToInt16 - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromUInt16);
                QUnit.test("Convert.ToInt16 - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromUInt32);
                QUnit.test("Convert.ToInt16 - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests.fromUInt64);
                QUnit.test("Convert.ToInt32 - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromBoolean);
                QUnit.test("Convert.ToInt32 - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromByte);
                QUnit.test("Convert.ToInt32 - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromChar);
                QUnit.test("Convert.ToInt32 - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromDecimal);
                QUnit.test("Convert.ToInt32 - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromDouble);
                QUnit.test("Convert.ToInt32 - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromInt16);
                QUnit.test("Convert.ToInt32 - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromInt32);
                QUnit.test("Convert.ToInt32 - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromInt64);
                QUnit.test("Convert.ToInt32 - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromObject);
                QUnit.test("Convert.ToInt32 - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromSByte);
                QUnit.test("Convert.ToInt32 - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromSingle);
                QUnit.test("Convert.ToInt32 - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromString);
                QUnit.test("Convert.ToInt32 - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromStringWithBase);
                QUnit.test("Convert.ToInt32 - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromUInt16);
                QUnit.test("Convert.ToInt32 - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromUInt32);
                QUnit.test("Convert.ToInt32 - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests.fromUInt64);
                QUnit.test("Convert.ToInt64 - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromBoolean);
                QUnit.test("Convert.ToInt64 - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromByte);
                QUnit.test("Convert.ToInt64 - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromChar);
                QUnit.test("Convert.ToInt64 - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromDecimal);
                QUnit.test("Convert.ToInt64 - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromDouble);
                QUnit.test("Convert.ToInt64 - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromInt16);
                QUnit.test("Convert.ToInt64 - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromInt32);
                QUnit.test("Convert.ToInt64 - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromInt64);
                QUnit.test("Convert.ToInt64 - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromObject);
                QUnit.test("Convert.ToInt64 - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromSByte);
                QUnit.test("Convert.ToInt64 - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromSingle);
                QUnit.test("Convert.ToInt64 - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromString);
                QUnit.test("Convert.ToInt64 - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromStringWithBase);
                QUnit.test("Convert.ToInt64 - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromUInt16);
                QUnit.test("Convert.ToInt64 - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromUInt32);
                QUnit.test("Convert.ToInt64 - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests.fromUInt64);
                QUnit.test("Convert.ToSByte - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromBoolean);
                QUnit.test("Convert.ToSByte - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromByte);
                QUnit.test("Convert.ToSByte - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromChar);
                QUnit.test("Convert.ToSByte - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromDecimal);
                QUnit.test("Convert.ToSByte - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromDouble);
                QUnit.test("Convert.ToSByte - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromInt16);
                QUnit.test("Convert.ToSByte - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromInt32);
                QUnit.test("Convert.ToSByte - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromInt64);
                QUnit.test("Convert.ToSByte - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromObject);
                QUnit.test("Convert.ToSByte - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromSByte);
                QUnit.test("Convert.ToSByte - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromSingle);
                QUnit.test("Convert.ToSByte - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromString);
                QUnit.test("Convert.ToSByte - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromStringWithBase);
                QUnit.test("Convert.ToSByte - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromUInt16);
                QUnit.test("Convert.ToSByte - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromUInt32);
                QUnit.test("Convert.ToSByte - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests.fromUInt64);
                QUnit.test("Convert.ToSingle - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromBoolean);
                QUnit.test("Convert.ToSingle - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromByte);
                QUnit.test("Convert.ToSingle - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromDecimal);
                QUnit.test("Convert.ToSingle - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromDouble);
                QUnit.test("Convert.ToSingle - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromInt16);
                QUnit.test("Convert.ToSingle - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromInt32);
                QUnit.test("Convert.ToSingle - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromInt64);
                QUnit.test("Convert.ToSingle - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromObject);
                QUnit.test("Convert.ToSingle - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromSByte);
                QUnit.test("Convert.ToSingle - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromSingle);
                QUnit.test("Convert.ToSingle - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromString);
                QUnit.test("Convert.ToSingle - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromUInt16);
                QUnit.test("Convert.ToSingle - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromUInt32);
                QUnit.test("Convert.ToSingle - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests.fromUInt64);
                QUnit.test("Convert.ToUInt16 - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromBoolean);
                QUnit.test("Convert.ToUInt16 - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromByte);
                QUnit.test("Convert.ToUInt16 - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromChar);
                QUnit.test("Convert.ToUInt16 - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromDecimal);
                QUnit.test("Convert.ToUInt16 - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromDouble);
                QUnit.test("Convert.ToUInt16 - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromInt16);
                QUnit.test("Convert.ToUInt16 - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromInt32);
                QUnit.test("Convert.ToUInt16 - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromInt64);
                QUnit.test("Convert.ToUInt16 - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromObject);
                QUnit.test("Convert.ToUInt16 - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromSByte);
                QUnit.test("Convert.ToUInt16 - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromSingle);
                QUnit.test("Convert.ToUInt16 - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromString);
                QUnit.test("Convert.ToUInt16 - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromStringWithBase);
                QUnit.test("Convert.ToUInt16 - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromUInt16);
                QUnit.test("Convert.ToUInt16 - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromUInt32);
                QUnit.test("Convert.ToUInt16 - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests.fromUInt64);
                QUnit.test("Convert.ToUInt32 - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromBoolean);
                QUnit.test("Convert.ToUInt32 - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromByte);
                QUnit.test("Convert.ToUInt32 - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromChar);
                QUnit.test("Convert.ToUInt32 - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromDecimal);
                QUnit.test("Convert.ToUInt32 - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromDouble);
                QUnit.test("Convert.ToUInt32 - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromInt16);
                QUnit.test("Convert.ToUInt32 - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromInt32);
                QUnit.test("Convert.ToUInt32 - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromInt64);
                QUnit.test("Convert.ToUInt32 - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromObject);
                QUnit.test("Convert.ToUInt32 - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromSByte);
                QUnit.test("Convert.ToUInt32 - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromSingle);
                QUnit.test("Convert.ToUInt32 - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromString);
                QUnit.test("Convert.ToUInt32 - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromStringWithBase);
                QUnit.test("Convert.ToUInt32 - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromUInt16);
                QUnit.test("Convert.ToUInt32 - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromUInt32);
                QUnit.test("Convert.ToUInt32 - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests.fromUInt64);
                QUnit.test("Convert.ToUInt64 - FromBoolean", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromBoolean);
                QUnit.test("Convert.ToUInt64 - FromByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromByte);
                QUnit.test("Convert.ToUInt64 - FromChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromChar);
                QUnit.test("Convert.ToUInt64 - FromDecimal", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromDecimal);
                QUnit.test("Convert.ToUInt64 - FromDouble", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromDouble);
                QUnit.test("Convert.ToUInt64 - FromInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromInt16);
                QUnit.test("Convert.ToUInt64 - FromInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromInt32);
                QUnit.test("Convert.ToUInt64 - FromInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromInt64);
                QUnit.test("Convert.ToUInt64 - FromObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromObject);
                QUnit.test("Convert.ToUInt64 - FromSByte", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromSByte);
                QUnit.test("Convert.ToUInt64 - FromSingle", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromSingle);
                QUnit.test("Convert.ToUInt64 - FromString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromString);
                QUnit.test("Convert.ToUInt64 - FromStringWithBase", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromStringWithBase);
                QUnit.test("Convert.ToUInt64 - FromUInt16", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromUInt16);
                QUnit.test("Convert.ToUInt64 - FromUInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromUInt32);
                QUnit.test("Convert.ToUInt64 - FromUInt64", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests.fromUInt64);
                QUnit.module("Date and time");
                QUnit.test("DateTimeFormatInfo - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests.typePropertiesAreCorrect);
                QUnit.test("DateTimeFormatInfo - GetFormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests.getFormatWorks);
                QUnit.test("DateTimeFormatInfo - InvariantWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests.invariantWorks);
                QUnit.test("DateTime - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.typePropertiesAreCorrect);
                QUnit.test("DateTime - DefaultConstructorReturnsTodaysDate", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.defaultConstructorReturnsTodaysDate);
                QUnit.test("DateTime - CreatingInstanceReturnsDateZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.creatingInstanceReturnsDateZero);
                QUnit.test("DateTime - MillisecondSinceEpochConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.millisecondSinceEpochConstructorWorks);
                QUnit.test("DateTime - StringConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.stringConstructorWorks);
                QUnit.test("DateTime - YMDConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.yMDConstructorWorks);
                QUnit.test("DateTime - YMDHConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.yMDHConstructorWorks);
                QUnit.test("DateTime - YMDHNConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.yMDHNConstructorWorks);
                QUnit.test("DateTime - YMDHNSConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.yMDHNSConstructorWorks);
                QUnit.test("DateTime - YMDHNSUConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.yMDHNSUConstructorWorks);
                QUnit.test("DateTime - NowWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.nowWorks);
                QUnit.test("DateTime - UTCNowWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.uTCNowWorks);
                QUnit.test("DateTime - ToUniversalWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toUniversalWorks);
                QUnit.test("DateTime - ToLocalWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toLocalWorks);
                QUnit.test("DateTime - TodayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.todayWorks);
                QUnit.test("DateTime - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.formatWorks);
                QUnit.test("DateTime - LocaleFormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.localeFormatWorks);
                QUnit.test("DateTime - GetFullYearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getFullYearWorks);
                QUnit.test("DateTime - GetMonthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getMonthWorks);
                QUnit.test("DateTime - GetDateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getDateWorks);
                QUnit.test("DateTime - GetHoursWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getHoursWorks);
                QUnit.test("DateTime - GetMinutesWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getMinutesWorks);
                QUnit.test("DateTime - GetSecondsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getSecondsWorks);
                QUnit.test("DateTime - GetMillisecondsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getMillisecondsWorks);
                QUnit.test("DateTime - GetDayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getDayWorks);
                QUnit.test("DateTime - GetTimeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getTimeWorks);
                QUnit.test("DateTime - ValueOfWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.valueOfWorks);
                QUnit.test("DateTime - GetTimezoneOffsetWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getTimezoneOffsetWorks);
                QUnit.test("DateTime - GetUTCFullYearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCFullYearWorks);
                QUnit.test("DateTime - GetUtcMonthWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUtcMonthWorks);
                QUnit.test("DateTime - GetUTCDateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCDateWorks);
                QUnit.test("DateTime - GetUTCHoursWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCHoursWorks);
                QUnit.test("DateTime - GetUTCMinutesWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCMinutesWorks);
                QUnit.test("DateTime - GetUTCSecondsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCSecondsWorks);
                QUnit.test("DateTime - GetUTCMillisecondsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCMillisecondsWorks);
                QUnit.test("DateTime - GetUTCDayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getUTCDayWorks);
                QUnit.test("DateTime - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.parseWorks);
                QUnit.test("DateTime - ParseExactWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.parseExactWorks);
                QUnit.test("DateTime - ParseExactWithCultureWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.parseExactWithCultureWorks);
                QUnit.test("DateTime - ParseExactUTCWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.parseExactUTCWorks);
                QUnit.test("DateTime - ParseExactUTCWithCultureWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.parseExactUTCWithCultureWorks);
                QUnit.test("DateTime - ToDateStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toDateStringWorks);
                QUnit.test("DateTime - ToTimeStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toTimeStringWorks);
                QUnit.test("DateTime - ToUTCStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toUTCStringWorks);
                QUnit.test("DateTime - ToLocaleDateStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toLocaleDateStringWorks);
                QUnit.test("DateTime - ToLocaleTimeStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.toLocaleTimeStringWorks);
                QUnit.test("DateTime - SubtractingDatesWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.subtractingDatesWorks);
                QUnit.test("DateTime - SubtractMethodReturningTimeSpanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.subtractMethodReturningTimeSpanWorks);
                QUnit.test("DateTime - DateEqualityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateEqualityWorks);
                QUnit.test("DateTime - DateInequalityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateInequalityWorks);
                QUnit.test("DateTime - DateLessThanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateLessThanWorks);
                QUnit.test("DateTime - DateLessEqualWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateLessEqualWorks);
                QUnit.test("DateTime - DateGreaterThanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateGreaterThanWorks);
                QUnit.test("DateTime - DateGreaterEqualWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateGreaterEqualWorks);
                QUnit.test("DateTime - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.getHashCodeWorks);
                QUnit.test("DateTime - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.equalsWorks);
                QUnit.test("DateTime - DateTimeEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateTimeEqualsWorks);
                QUnit.test("DateTime - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.compareToWorks);
                QUnit.test("DateTime - DateTimes", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests.dateTimes);
                QUnit.test("TimeSpan - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.typePropertiesAreCorrect);
                QUnit.test("TimeSpan - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.defaultConstructorWorks);
                QUnit.test("TimeSpan - DefaultValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.defaultValueWorks);
                QUnit.test("TimeSpan - ZeroWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.zeroWorks);
                QUnit.test("TimeSpan - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.creatingInstanceReturnsTimeSpanWithZeroValue);
                QUnit.test("TimeSpan - ParameterConstructorsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.parameterConstructorsWorks);
                QUnit.test("TimeSpan - FactoryMethodsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.factoryMethodsWork);
                QUnit.test("TimeSpan - PropertiesWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.propertiesWork);
                QUnit.test("TimeSpan - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.compareToWorks);
                QUnit.test("TimeSpan - CompareWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.compareWorks);
                QUnit.test("TimeSpan - StaticEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.staticEqualsWorks);
                QUnit.test("TimeSpan - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.equalsWorks);
                QUnit.test("TimeSpan - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.iEquatableEqualsWorks);
                QUnit.test("TimeSpan - ToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.toStringWorks);
                QUnit.test("TimeSpan - AddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.addWorks);
                QUnit.test("TimeSpan - SubtractWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.subtractWorks);
                QUnit.test("TimeSpan - DurationWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.durationWorks);
                QUnit.test("TimeSpan - NegateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.negateWorks);
                QUnit.test("TimeSpan - ComparisonOperatorsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.comparisonOperatorsWork);
                QUnit.test("TimeSpan - AdditionOperatorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.additionOperatorWorks);
                QUnit.test("TimeSpan - SubtractionOperatorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.subtractionOperatorWorks);
                QUnit.test("TimeSpan - UnaryPlusWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.unaryPlusWorks);
                QUnit.test("TimeSpan - UnaryMinusWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests.unaryMinusWorks);
                QUnit.module("Decimal Math");
                QUnit.test("TestSubtractOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testSubtractOperator);
                QUnit.test("TestRemainderOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testRemainderOperator);
                QUnit.test("TestMultiplyOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testMultiplyOperator);
                QUnit.test("TestDivideOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testDivideOperator);
                QUnit.test("TestAddOperator", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testAddOperator);
                QUnit.test("TestAddMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testAddMethod);
                QUnit.test("TestDivideMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testDivideMethod);
                QUnit.test("TestMultiplyMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testMultiplyMethod);
                QUnit.test("TestRemainderMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testRemainderMethod);
                QUnit.test("TestSubtractMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testSubtractMethod);
                QUnit.test("TestCeilingMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testCeilingMethod);
                QUnit.test("TestFloorMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests.testFloorMethod);
                QUnit.module("Diagnostics");
                QUnit.test("Contract - Assume", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.assume);
                QUnit.test("Contract - AssumeWithUserMessage", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.assumeWithUserMessage);
                QUnit.test("Contract - _Assert", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests._Assert);
                QUnit.test("Contract - AssertWithUserMessage", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.assertWithUserMessage);
                QUnit.test("Contract - Requires", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.requires);
                QUnit.test("Contract - RequiresWithUserMessage", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.requiresWithUserMessage);
                QUnit.test("Contract - RequiresWithTypeException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.requiresWithTypeException);
                QUnit.test("Contract - RequiredWithTypeExceptionAndUserMessage", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.requiredWithTypeExceptionAndUserMessage);
                QUnit.test("Contract - ForAll", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.forAll);
                QUnit.test("Contract - ForAllWithCollection", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.forAllWithCollection);
                QUnit.test("Contract - Exists", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.exists);
                QUnit.test("Contract - ExistsWithCollection", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests.existsWithCollection);
                QUnit.test("Stopwatch - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests.defaultConstructorWorks);
                QUnit.test("Stopwatch - ConstantsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests.constantsWorks);
                QUnit.test("Stopwatch - StartNewWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests.startNewWorks);
                QUnit.test("Stopwatch - StartAndStopWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests.startAndStopWork);
                QUnit.test("Stopwatch - ElapsedWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests.elapsedWorks);
                QUnit.test("Stopwatch - GetTimestampWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests.getTimestampWorks);
                QUnit.module("Enum");
                QUnit.test("Enum - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests.typePropertiesAreCorrect);
                QUnit.test("Enum - FirstValueOfEnumIsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests.firstValueOfEnumIsZero);
                QUnit.test("Enum - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests.getHashCodeWorks);
                QUnit.test("Enum - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests.equalsWorks);
                QUnit.module("EqualityComparer");
                QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests.typePropertiesAreCorrect);
                QUnit.test("DefaultComparerCanGetHashCodeOfNumber", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests.defaultComparerCanGetHashCodeOfNumber);
                QUnit.test("DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined);
                QUnit.test("DefaultComparerCanDetermineEquality", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests.defaultComparerCanDetermineEquality);
                QUnit.test("DefaultComparerInvokesOverriddenGetHashCode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests.defaultComparerInvokesOverriddenGetHashCode);
                QUnit.test("DefaultComparerInvokesOverriddenEquals", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests.defaultComparerInvokesOverriddenEquals);
                QUnit.module("Exceptions");
                QUnit.test("AggregateException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.typePropertiesAreCorrect);
                QUnit.test("AggregateException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.defaultConstructorWorks);
                QUnit.test("AggregateException - ConstructorWithIEnumerableInnerExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.constructorWithIEnumerableInnerExceptionsWorks);
                QUnit.test("AggregateException - ConstructorWithInnerExceptionArrayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.constructorWithInnerExceptionArrayWorks);
                QUnit.test("AggregateException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.constructorWithMessageWorks);
                QUnit.test("AggregateException - ConstructorWithMessageAndIEnumerableInnerExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.constructorWithMessageAndIEnumerableInnerExceptionsWorks);
                QUnit.test("AggregateException - ConstructorWithMessageAndInnerExceptionArrayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.constructorWithMessageAndInnerExceptionArrayWorks);
                QUnit.test("AggregateException - FlattenWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests.flattenWorks);
                QUnit.test("ArgumentException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests.typePropertiesAreCorrect);
                QUnit.test("ArgumentException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests.defaultConstructorWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests.constructorWithMessageWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests.constructorWithMessageAndParamNameWorks);
                QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests.constructorWithMessageAndParamNameAndInnerExceptionWorks);
                QUnit.test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests.typePropertiesAreCorrect);
                QUnit.test("ArgumentNullException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests.defaultConstructorWorks);
                QUnit.test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests.constructorWithParamNameWorks);
                QUnit.test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests.constructorWithParamNameAndMessageWorks);
                QUnit.test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.typePropertiesAreCorrect);
                QUnit.test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.defaultConstructorWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.constructorWithParamNameWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.constructorWithParamNameAndMessageWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.constructorWithParamNameAndActualValueAndMessageWorks);
                QUnit.test("ArgumentOutOfRangeException - RangeErrorIsConvertedToArgumentOutOfRangeException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests.rangeErrorIsConvertedToArgumentOutOfRangeException);
                QUnit.test("ArithmeticException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests.typePropertiesAreCorrect);
                QUnit.test("ArithmeticException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests.defaultConstructorWorks);
                QUnit.test("ArithmeticException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests.constructorWithMessageWorks);
                QUnit.test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Try/Catch/Finally - ThrowingAndCatchingExceptionsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests.throwingAndCatchingExceptionsWorks);
                QUnit.test("Try/Catch/Finally - ExceptionOfWrongTypeIsNotCaught", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests.exceptionOfWrongTypeIsNotCaught);
                QUnit.test("Try/Catch/Finally - CanCatchExceptionAsBaseType", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests.canCatchExceptionAsBaseType);
                QUnit.test("Try/Catch/Finally - CanCatchStringAsException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests.canCatchStringAsException);
                QUnit.test("Exception - CanCatchStringAsCatchAll", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests.canCatchStringAsCatchAll);
                QUnit.test("CultureNotFoundException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.typePropertiesAreCorrect);
                QUnit.test("CultureNotFoundException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.defaultConstructorWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithMessageWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndParamNameWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithMessageAndParamNameWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndCultureNameAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithMessageAndCultureNameAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithParamNameAndCultureNameAndMessage", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithParamNameAndCultureNameAndMessage);
                QUnit.test("CultureNotFoundException - ConstructorWithMessageAndCultureIdAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithMessageAndCultureIdAndInnerExceptionWorks);
                QUnit.test("CultureNotFoundException - ConstructorWithParamNameAndCultureIdAndMessage", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests.constructorWithParamNameAndCultureIdAndMessage);
                QUnit.test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests.typePropertiesAreCorrect);
                QUnit.test("DivideByZeroException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests.defaultConstructorWorks);
                QUnit.test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests.constructorWithMessageWorks);
                QUnit.test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Exception - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests.typePropertiesAreCorrect);
                QUnit.test("Exception - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests.defaultConstructorWorks);
                QUnit.test("Exception - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests.constructorWithMessageWorks);
                QUnit.test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("Exception - MessagePropertyCanBeOverridden", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests.messagePropertyCanBeOverridden);
                QUnit.test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests.innerExceptionPropertyCanBeOverridden);
                QUnit.test("FormatException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests.typePropertiesAreCorrect);
                QUnit.test("FormatException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests.defaultConstructorWorks);
                QUnit.test("FormatException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests.constructorWithMessageWorks);
                QUnit.test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("IndexOutOfRangeException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests.typePropertiesAreCorrect);
                QUnit.test("IndexOutOfRangeException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests.defaultConstructorWorks);
                QUnit.test("IndexOutOfRangeException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests.constructorWithMessageWorks);
                QUnit.test("IndexOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("InvalidCastException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests.typePropertiesAreCorrect);
                QUnit.test("InvalidCastException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests.defaultConstructorWorks);
                QUnit.test("InvalidCastException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests.constructorWithMessageWorks);
                QUnit.test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests.typePropertiesAreCorrect);
                QUnit.test("InvalidOperationException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests.defaultConstructorWorks);
                QUnit.test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests.constructorWithMessageWorks);
                QUnit.test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests.typePropertiesAreCorrect);
                QUnit.test("KeyNotFoundException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests.defaultConstructorWorks);
                QUnit.test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests.constructorWithMessageWorks);
                QUnit.test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NotImplementedException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests.typePropertiesAreCorrect);
                QUnit.test("NotImplementedException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests.defaultConstructorWorks);
                QUnit.test("NotImplementedException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests.constructorWithMessageWorks);
                QUnit.test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NotSupportedException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests.typePropertiesAreCorrect);
                QUnit.test("NotSupportedException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests.defaultConstructorWorks);
                QUnit.test("NotSupportedException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests.constructorWithMessageWorks);
                QUnit.test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NullReferenceException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests.typePropertiesAreCorrect);
                QUnit.test("NullReferenceException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests.defaultConstructorWorks);
                QUnit.test("NullReferenceException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests.constructorWithMessageWorks);
                QUnit.test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("NullReferenceException - AccessingAFieldOnANullObjectCausesANullReferenceException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests.accessingAFieldOnANullObjectCausesANullReferenceException);
                QUnit.test("OperationCanceledException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.typePropertiesAreCorrect);
                QUnit.test("OperationCanceledException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.defaultConstructorWorks);
                QUnit.test("OperationCanceledException - CancellationTokenOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.cancellationTokenOnlyConstructorWorks);
                QUnit.test("OperationCanceledException - MessageOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.messageOnlyConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndInnerExceptionConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.messageAndInnerExceptionConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndCancellationTokenConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.messageAndCancellationTokenConstructorWorks);
                QUnit.test("OperationCanceledException - MessageAndInnerExceptionAndCancellationTokenConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests.messageAndInnerExceptionAndCancellationTokenConstructorWorks);
                QUnit.test("OutOfMemoryException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests.typePropertiesAreCorrect);
                QUnit.test("OutOfMemoryException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests.defaultConstructorWorks);
                QUnit.test("OutOfMemoryException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests.constructorWithMessageWorks);
                QUnit.test("OutOfMemoryException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("OverflowException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests.typePropertiesAreCorrect);
                QUnit.test("OverflowException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests.defaultConstructorWorks);
                QUnit.test("OverflowException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests.constructorWithMessageWorks);
                QUnit.test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("PromiseException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests.typePropertiesAreCorrect);
                QUnit.test("PromiseException - ArgumentsOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests.argumentsOnlyConstructorWorks);
                QUnit.test("PromiseException - ArgumentsAndMessageConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests.argumentsAndMessageConstructorWorks);
                QUnit.test("PromiseException - ArgumentsAndMessageAndInnerExceptionConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests.argumentsAndMessageAndInnerExceptionConstructorWorks);
                QUnit.test("RankException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests.typePropertiesAreCorrect);
                QUnit.test("RankException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests.defaultConstructorWorks);
                QUnit.test("RankException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests.constructorWithMessageWorks);
                QUnit.test("RegexMatchTimeoutException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests.typePropertiesAreCorrect);
                QUnit.test("RegexMatchTimeoutException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests.defaultConstructorWorks);
                QUnit.test("RegexMatchTimeoutException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests.constructorWithMessageWorks);
                QUnit.test("RegexMatchTimeoutException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("RegexMatchTimeoutException - ConstructorWithExceptionDetailsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests.constructorWithExceptionDetailsWorks);
                QUnit.test("SystemException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests.typePropertiesAreCorrect);
                QUnit.test("SystemException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests.defaultConstructorWorks);
                QUnit.test("SystemException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests.constructorWithMessageWorks);
                QUnit.test("SystemException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.test("TaskCanceledException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests.typePropertiesAreCorrect);
                QUnit.test("TaskCanceledException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests.defaultConstructorWorks);
                QUnit.test("TaskCanceledException - MessageOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests.messageOnlyConstructorWorks);
                QUnit.test("TaskCanceledException - TaskOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests.taskOnlyConstructorWorks);
                QUnit.test("TaskCanceledException - MessageAndInnerExceptionConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests.messageAndInnerExceptionConstructorWorks);
                QUnit.test("TimeoutException - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests.typePropertiesAreCorrect);
                QUnit.test("TimeoutException - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests.defaultConstructorWorks);
                QUnit.test("TimeoutException - ConstructorWithMessageWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests.constructorWithMessageWorks);
                QUnit.test("TimeoutException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests.constructorWithMessageAndInnerExceptionWorks);
                QUnit.module("Guid");
                QUnit.test("Guid - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.typePropertiesAreCorrect);
                QUnit.test("Guid - DefaultValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.defaultValueWorks);
                QUnit.test("Guid - CreateInstanceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.createInstanceWorks);
                QUnit.test("Guid - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.defaultConstructorWorks);
                QUnit.test("Guid - EmptyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.emptyWorks);
                QUnit.test("Guid - ToStringWithoutArgumentsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.toStringWithoutArgumentsWorks);
                QUnit.test("Guid - ByteArrayConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.byteArrayConstructorWorks);
                QUnit.test("Guid - Int32Int16Int16ByteArrayConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.int32Int16Int16ByteArrayConstructorWorks);
                QUnit.test("Guid - Int32Int16Int16BytesConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.int32Int16Int16BytesConstructorWorks);
                QUnit.test("Guid - UInt32UInt16UInt16BytesConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.uInt32UInt16UInt16BytesConstructorWorks);
                QUnit.test("Guid - StringConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.stringConstructorWorks);
                QUnit.test("Guid - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.parseWorks);
                QUnit.test("Guid - ParseExactWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.parseExactWorks);
                QUnit.test("Guid - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.tryParseWorks);
                QUnit.test("Guid - TryParseExactWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.tryParseExactWorks);
                QUnit.test("Guid - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.compareToWorks);
                QUnit.test("Guid - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.iComparableCompareToWorks);
                QUnit.test("Guid - EqualsObjectWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.equalsObjectWorks);
                QUnit.test("Guid - EqualsGuidWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.equalsGuidWorks);
                QUnit.test("Guid - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.iEquatableEqualsWorks);
                QUnit.test("Guid - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.getHashCodeWorks);
                QUnit.test("Guid - EqualityOperatorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.equalityOperatorWorks);
                QUnit.test("Guid - InequalityOperatorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.inequalityOperatorWorks);
                QUnit.test("Guid - ToStringWithFormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.toStringWithFormatWorks);
                QUnit.test("Guid - NewGuidWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.newGuidWorks);
                QUnit.test("Guid - ToByteArrayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests.toByteArrayWorks);
                QUnit.module("LINQ");
                QUnit.test("Aggregate - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators.test);
                QUnit.test("Aggregate - Bridge315", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators.bridge315);
                QUnit.test("Conversion - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqConversionOperators.test);
                QUnit.test("Element - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqElementOperators.test);
                QUnit.test("Generation - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGenerationOperators.test);
                QUnit.test("Grouping - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators.test);
                QUnit.test("Grouping - TestComplexGrouping", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators.testComplexGrouping);
                QUnit.test("Grouping - TestAnagrams", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators.testAnagrams);
                QUnit.test("Join - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqJoinOperators.test);
                QUnit.test("Misc - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqMiscellaneousOperators.test);
                QUnit.test("Ordering - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqOrderingOperators.test);
                QUnit.test("Partitioning - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqPartitioningOperators.test);
                QUnit.test("Projection - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqProjectionOperators.test);
                QUnit.test("Quantifiers - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQuantifiers.test);
                QUnit.test("Query - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQueryExecution.test);
                QUnit.test("Restriction- Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqRestrictionOperators.test);
                QUnit.test("Set - Test", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqSetOperators.test);
                QUnit.module("Math");
                QUnit.test("Math - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.constantsWork);
                QUnit.test("Math - AbsOfDoubleWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfDoubleWorks);
                QUnit.test("Math - AbsOfIntWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfIntWorks);
                QUnit.test("Math - AbsOfLongWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfLongWorks);
                QUnit.test("Math - AbsOfSbyteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfSbyteWorks);
                QUnit.test("Math - AbsOfShortWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfShortWorks);
                QUnit.test("Math - AbsOfFloatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfFloatWorks);
                QUnit.test("Math - AbsOfDecimalWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.absOfDecimalWorks);
                QUnit.test("Math - AcosWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.acosWorks);
                QUnit.test("Math - AsinWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.asinWorks);
                QUnit.test("Math - AtanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.atanWorks);
                QUnit.test("Math - Atan2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.atan2Works);
                QUnit.test("Math - CosWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.cosWorks);
                QUnit.test("Math - DivRemWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.divRemWorks);
                QUnit.test("Math - ExpWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.expWorks);
                QUnit.test("Math - FloorOfDoubleWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.floorOfDoubleWorks);
                QUnit.test("Math - FloorOfDecimalWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.floorOfDecimalWorks);
                QUnit.test("Math - LogWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.logWorks);
                QUnit.test("Math - MaxOfByteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfByteWorks);
                QUnit.test("Math - MaxOfDecimalWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfDecimalWorks);
                QUnit.test("Math - MaxOfDoubleWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfDoubleWorks);
                QUnit.test("Math - MaxOfShortWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfShortWorks);
                QUnit.test("Math - MaxOfIntWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfIntWorks);
                QUnit.test("Math - MaxOfLongWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfLongWorks);
                QUnit.test("Math - MaxOfSByteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfSByteWorks);
                QUnit.test("Math - MaxOfFloatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfFloatWorks);
                QUnit.test("Math - MaxOfUShortWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfUShortWorks);
                QUnit.test("Math - MaxOfUIntWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfUIntWorks);
                QUnit.test("Math - MaxOfULongWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.maxOfULongWorks);
                QUnit.test("Math - MinOfByteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfByteWorks);
                QUnit.test("Math - MinOfDecimalWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfDecimalWorks);
                QUnit.test("Math - MinOfDoubleWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfDoubleWorks);
                QUnit.test("Math - MinOfShortWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfShortWorks);
                QUnit.test("Math - MinOfIntWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfIntWorks);
                QUnit.test("Math - MinOfLongWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfLongWorks);
                QUnit.test("Math - MinOfSByteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfSByteWorks);
                QUnit.test("Math - MinOfFloatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfFloatWorks);
                QUnit.test("Math - MinOfUShortWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfUShortWorks);
                QUnit.test("Math - MinOfUIntWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfUIntWorks);
                QUnit.test("Math - MinOfULongWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.minOfULongWorks);
                QUnit.test("Math - PowWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.powWorks);
                QUnit.test("Math - RandomWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.randomWorks);
                QUnit.test("Math - RoundOfDoubleWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.roundOfDoubleWorks);
                QUnit.test("Math - RoundDecimalWithModeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.roundDecimalWithModeWorks);
                QUnit.test("Math - RoundDecimalWithPrecisionAndModeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.roundDecimalWithPrecisionAndModeWorks);
                QUnit.test("Math - RoundDoubleWithModeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.roundDoubleWithModeWorks);
                QUnit.test("Math - RoundDoubleWithPrecisionAndModeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.roundDoubleWithPrecisionAndModeWorks);
                QUnit.test("Math - JsRoundWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.jsRoundWorks);
                QUnit.test("Math - IEEERemainderWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.iEEERemainderWorks);
                QUnit.test("Math - SinWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.sinWorks);
                QUnit.test("Math - SqrtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.sqrtWorks);
                QUnit.test("Math - TanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests.tanWorks);
                QUnit.module("Nullable");
                QUnit.test("Nullable - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.typePropertiesAreCorrect);
                QUnit.test("Nullable - ConvertingToNullableWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.convertingToNullableWorks);
                QUnit.test("Nullable - HasValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.hasValueWorks);
                QUnit.test("Nullable - BoxingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.boxingWorks);
                QUnit.test("Nullable - UnboxingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.unboxingWorks);
                QUnit.test("Nullable - ValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.valueWorks);
                QUnit.test("Nullable - UnboxingValueOfWrongTypeThrowsAnException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.unboxingValueOfWrongTypeThrowsAnException);
                QUnit.test("Nullable - GetValueOrDefaultWithArgWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.getValueOrDefaultWithArgWorks);
                QUnit.test("Nullable - LiftedEqualityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedEqualityWorks);
                QUnit.test("Nullable - LiftedInequalityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedInequalityWorks);
                QUnit.test("Nullable - LiftedLessThanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedLessThanWorks);
                QUnit.test("Nullable - LiftedGreaterThanWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedGreaterThanWorks);
                QUnit.test("Nullable - LiftedLessThanOrEqualWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedLessThanOrEqualWorks);
                QUnit.test("Nullable - LiftedGreaterThanOrEqualWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedGreaterThanOrEqualWorks);
                QUnit.test("Nullable - LiftedSubtractionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedSubtractionWorks);
                QUnit.test("Nullable - LiftedAdditionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedAdditionWorks);
                QUnit.test("Nullable - LiftedModWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedModWorks);
                QUnit.test("Nullable - LiftedFloatingPointDivisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedFloatingPointDivisionWorks);
                QUnit.test("Nullable - LiftedIntegerDivisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedIntegerDivisionWorks);
                QUnit.test("Nullable - LiftedMultiplicationWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedMultiplicationWorks);
                QUnit.test("Nullable - LiftedBitwiseAndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedBitwiseAndWorks);
                QUnit.test("Nullable - LiftedBitwiseOrWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedBitwiseOrWorks);
                QUnit.test("Nullable - LiftedBitwiseXorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedBitwiseXorWorks);
                QUnit.test("Nullable - LiftedLeftShiftWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedLeftShiftWorks);
                QUnit.test("Nullable - LiftedSignedRightShiftWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedSignedRightShiftWorks);
                QUnit.test("Nullable - LiftedUnsignedRightShiftWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedUnsignedRightShiftWorks);
                QUnit.test("LiftedBooleanAndWorks #314", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedBooleanAndWorks);
                QUnit.test("LiftedBooleanOrWorks #314", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedBooleanOrWorks);
                QUnit.test("Nullable - LiftedBooleanNotWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedBooleanNotWorks);
                QUnit.test("Nullable - LiftedNegationWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedNegationWorks);
                QUnit.test("Nullable - LiftedUnaryPlusWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedUnaryPlusWorks);
                QUnit.test("Nullable - LiftedOnesComplementWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.liftedOnesComplementWorks);
                QUnit.test("CoalesceWorks #314", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests.coalesceWorks);
                QUnit.module("NumberFormatInfo");
                QUnit.test("NumberFormatInfoTests - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests.typePropertiesAreCorrect);
                QUnit.test("NumberFormatInfoTests - GetFormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests.getFormatWorks);
                QUnit.test("NumberFormatInfoTests - InvariantWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests.invariantWorks);
                QUnit.test("NumberFormatSpecifiersTests - CurrencyFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.currencyFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - DecimalFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.decimalFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - ExponentialFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.exponentialFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - FixedPointFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.fixedPointFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - GeneralFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.generalFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - NumericFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.numericFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - PercentFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.percentFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - RoundTripFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.roundTripFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - HexadecimalFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.hexadecimalFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomZeroFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customZeroFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomHashFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customHashFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomDotFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customDotFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomCommaFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customCommaFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomPercentFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customPercentFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomPerMileFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customPerMileFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomEscapeFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customEscapeFormatSpecifierWorks);
                QUnit.test("NumberFormatSpecifiersTests - CustomSemicolonFormatSpecifierWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests.customSemicolonFormatSpecifierWorks);
                QUnit.module("Property accessor");
                QUnit.test("AccessorsCanBeInvokedInstance", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests.accessorsCanBeInvokedInstance);
                QUnit.test("AccessorsCanBeInvokedStatic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests.accessorsCanBeInvokedStatic);
                QUnit.test("AccessorsCanBeInvokedGeneric", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests.accessorsCanBeInvokedGeneric);
                QUnit.test("AccessorsCanBeInvokedGenericStatic", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests.accessorsCanBeInvokedGenericStatic);
                QUnit.test("BaseAccessorsCanBeInvoked", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests.baseAccessorsCanBeInvoked);
                QUnit.test("BaseAccessorsCanBeInvokedGeneric", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests.baseAccessorsCanBeInvokedGeneric);
                QUnit.module("Random");
                QUnit.test("Random - Unseeded", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests.unseeded);
                QUnit.test("Random - Seeded", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests.seeded);
                QUnit.test("Random - Sample", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests.sample);
                QUnit.module("Regex");
                QUnit.test("Regex.IsMatch - IsMatchTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests.isMatchTest);
                QUnit.test("Regex.IsMatch - IsMatchWithOffsetTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests.isMatchWithOffsetTest);
                QUnit.test("Regex.IsMatch - IsMatchStaticTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests.isMatchStaticTest);
                QUnit.test("Regex.IsMatch - IsMatchStaticWithOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests.isMatchStaticWithOptionsTest);
                QUnit.test("Regex.IsMatch - IsMatchStaticWithOptionsAndTimeoutTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests.isMatchStaticWithOptionsAndTimeoutTest);
                QUnit.test("Regex.Replace - ReplaceTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceTest1);
                QUnit.test("Regex.Replace - ReplaceAtPositionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceAtPositionTest);
                QUnit.test("Regex.Replace - ReplaceAtPositionAndLengthTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceAtPositionAndLengthTest);
                QUnit.test("Regex.Replace - ReplaceWithEvaluatorTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceWithEvaluatorTest);
                QUnit.test("Regex.Replace - ReplaceWithEvaluatorAndCountTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceWithEvaluatorAndCountTest);
                QUnit.test("Regex.Replace - ReplaceWithEvaluatorAndCountAtPostitionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceWithEvaluatorAndCountAtPostitionTest);
                QUnit.test("Regex.Replace - ReplaceStaticTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticTest1);
                QUnit.test("Regex.Replace - ReplaceStaticTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticTest2);
                QUnit.test("Regex.Replace - ReplaceStaticWithOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticWithOptionsTest);
                QUnit.test("Regex.Replace - ReplaceStaticWithOptionsAndTimeoutTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticWithOptionsAndTimeoutTest);
                QUnit.test("Regex.Replace - ReplaceStaticWithEvaluatorTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticWithEvaluatorTest);
                QUnit.test("Regex.Replace - ReplaceStaticWithEvaluatorAndOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticWithEvaluatorAndOptionsTest);
                QUnit.test("Regex.Replace - ReplaceStaticWithEvaluatorAndOptionsAndTimoutTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests.replaceStaticWithEvaluatorAndOptionsAndTimoutTest);
                QUnit.test("Regex.Split - SplitTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitTest1);
                QUnit.test("Regex.Split - SplitTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitTest2);
                QUnit.test("Regex.Split - SplitTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitTest3);
                QUnit.test("Regex.Split - SplitTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitTest4);
                QUnit.test("Regex.Split - SplitTest5", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitTest5);
                QUnit.test("Regex.Split - SplitWithCountTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountTest1);
                QUnit.test("Regex.Split - SplitWithCountTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountTest2);
                QUnit.test("Regex.Split - SplitWithCountTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountTest3);
                QUnit.test("Regex.Split - SplitWithCountTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountTest4);
                QUnit.test("Regex.Split - SplitWithCountAndStartAtTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountAndStartAtTest1);
                QUnit.test("Regex.Split - SplitWithCountAndStartAtTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountAndStartAtTest2);
                QUnit.test("Regex.Split - SplitWithCountAndStartAtTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountAndStartAtTest3);
                QUnit.test("Regex.Split - SplitWithCountAndStartAtTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitWithCountAndStartAtTest4);
                QUnit.test("Regex.Split - SplitStaticTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticTest1);
                QUnit.test("Regex.Split - SplitStaticTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticTest2);
                QUnit.test("Regex.Split - SplitStaticTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticTest3);
                QUnit.test("Regex.Split - SplitStaticTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticTest4);
                QUnit.test("Regex.Split - SplitStaticTest5", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticTest5);
                QUnit.test("Regex.Split - SplitStaticWithOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticWithOptionsTest);
                QUnit.test("Regex.Split - SplitStaticWithOptionsAndTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests.splitStaticWithOptionsAndTimeout);
                QUnit.test("Regex: Anchors - StartOfStringOrLineTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.startOfStringOrLineTest);
                QUnit.test("Regex: Anchors - StartOfStringOrLineMultilineModeTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.startOfStringOrLineMultilineModeTest);
                QUnit.test("Regex: Anchors - EndOfStringOrLineTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrLineTest1);
                QUnit.test("Regex: Anchors - EndOfStringOrLineTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrLineTest2);
                QUnit.test("Regex: Anchors - EndOfStringOrLineTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrLineTest3);
                QUnit.test("Regex: Anchors - EndOfStringOrLineTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrLineTest4);
                QUnit.test("Regex: Anchors - StartOfStringOnlyTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.startOfStringOnlyTest);
                QUnit.test("Regex: Anchors - EndOfStringOrNewlineTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrNewlineTest);
                QUnit.test("Regex: Anchors - EndOfStringOnlyTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOnlyTest);
                QUnit.test("Regex: Anchors - ContiguousMatchesTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.contiguousMatchesTest);
                QUnit.test("Regex: Anchors - WordBoundaryTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.wordBoundaryTest);
                QUnit.test("Regex: Anchors - NonWordBoundaryTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.nonWordBoundaryTest);
                QUnit.test("Regex: Anchors - StartAndEndOfStringCustomTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.startAndEndOfStringCustomTest1);
                QUnit.test("Regex: Anchors - StartAndEndOfStringCustomTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.startAndEndOfStringCustomTest2);
                QUnit.test("Regex: Anchors - EndOfStringOrNewlineCustomTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrNewlineCustomTest1);
                QUnit.test("Regex: Anchors - EndOfStringOrNewlineCustomTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOrNewlineCustomTest2);
                QUnit.test("Regex: Anchors - EndOfStringOnlyCustomTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOnlyCustomTest1);
                QUnit.test("Regex: Anchors - EndOfStringOnlyCustomTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOnlyCustomTest2);
                QUnit.test("Regex: Anchors - EndOfStringOnlyCustomTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.endOfStringOnlyCustomTest3);
                QUnit.test("Regex: Anchors - ContiguousMatchesCustomTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.contiguousMatchesCustomTest1);
                QUnit.test("Regex: Anchors - ContiguousMatchesCustomTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests.contiguousMatchesCustomTest2);
                QUnit.test("Regex: Backreferences - MsdnNumberedBackrefTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.msdnNumberedBackrefTest);
                QUnit.test("Regex: Backreferences - MsdnNamedBackrefTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.msdnNamedBackrefTest);
                QUnit.test("Regex: Backreferences - MsdnNamedBackrefWithNumberAsNameTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.msdnNamedBackrefWithNumberAsNameTest);
                QUnit.test("Regex: Backreferences - MsdnNamedBackrefWithRedefinedGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.msdnNamedBackrefWithRedefinedGroupTest);
                QUnit.test("Regex: Backreferences - MsdnNamedBackrefWithEmptyCaptureTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.msdnNamedBackrefWithEmptyCaptureTest1);
                QUnit.test("Regex: Backreferences - MsdnNamedBackrefWithEmptyCaptureTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.msdnNamedBackrefWithEmptyCaptureTest2);
                QUnit.test("Regex: Backreferences - NamedBackrefToUnreachableGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.namedBackrefToUnreachableGroupTest);
                QUnit.test("Regex: Backreferences - NamedBackrefToSelfGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.namedBackrefToSelfGroupTest);
                QUnit.test("Regex: Backreferences - NamedBackrefToParentGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.namedBackrefToParentGroupTest);
                QUnit.test("Regex: Backreferences - NumberedBackrefTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.numberedBackrefTest);
                QUnit.test("Regex: Backreferences - NumberedBackrefInGroupFailsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.numberedBackrefInGroupFailsTest);
                QUnit.test("Regex: Backreferences - NamedBackrefInGroupFailsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests.namedBackrefInGroupFailsTest);
                QUnit.test("Regex.Escape - EscapeTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.escapeTest);
                QUnit.test("Regex.Escape - UnescapeTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.unescapeTest);
                QUnit.test("Regex.Escape - EscapeCharSetTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.escapeCharSetTest);
                QUnit.test("Regex.Escape - NonEscapeCharSetTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.nonEscapeCharSetTest);
                QUnit.test("Regex.Escape - BracketEscapeTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.bracketEscapeTest);
                QUnit.test("Regex.Escape - BracketEscapeInGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.bracketEscapeInGroupTest);
                QUnit.test("Regex.Escape - BracketEscapeInCharGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests.bracketEscapeInCharGroupTest);
                QUnit.test("Regex.Matches - MatchesTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests.matchesTest);
                QUnit.test("Regex.Matches - MatchesAtPositionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests.matchesAtPositionTest);
                QUnit.test("Regex.Matches - MatchesStaticTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests.matchesStaticTest);
                QUnit.test("Regex.Matches - MatchesStaticWithOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests.matchesStaticWithOptionsTest);
                QUnit.test("Regex.Matches - MatchesStaticWithOptionsAndTimeoutTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests.matchesStaticWithOptionsAndTimeoutTest);
                QUnit.test("Regex.Match - MatchTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests.matchTest);
                QUnit.test("Regex.Match - MatchAtPositionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests.matchAtPositionTest);
                QUnit.test("Regex.Match - MatchAtPositionAndLengthTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests.matchAtPositionAndLengthTest);
                QUnit.test("Regex.Match - MatchStaticTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests.matchStaticTest);
                QUnit.test("Regex.Match - MatchStaticWithOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests.matchStaticWithOptionsTest);
                QUnit.test("Regex.Match - MatchStaticWithOptionsAndTimeoutTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests.matchStaticWithOptionsAndTimeoutTest);
                QUnit.test("RegexCaptureCollection - CaseDataTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests.caseDataTest);
                QUnit.test("RegexCaptureCollection - CaptureCollectionFieldsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests.captureCollectionFieldsTest);
                QUnit.test("RegexCaptureCollection - CaptureCollectionForeachTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests.captureCollectionForeachTest);
                QUnit.test("RegexCaptureCollection - CaptureCollectionEnumeratorTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests.captureCollectionEnumeratorTest);
                QUnit.test("RegexCaptureCollection - CaptureCollectionCopyToTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests.captureCollectionCopyToTest);
                QUnit.test("Regex Entity - CaseDataTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.caseDataTest);
                QUnit.test("Regex Entity - GetGroupNamesTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.getGroupNamesTest);
                QUnit.test("Regex Entity - GetGroupNumbersTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.getGroupNumbersTest);
                QUnit.test("Regex Entity - GroupNameFromNumberTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.groupNameFromNumberTest);
                QUnit.test("Regex Entity - GroupNumberFromNameTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.groupNumberFromNameTest);
                QUnit.test("Regex Entity - SupportedOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.supportedOptionsTest);
                QUnit.test("Regex Entity - MatchNamedGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.matchNamedGroupTest);
                QUnit.test("Regex Entity - MatchInnerNamedGroupTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.matchInnerNamedGroupTest1);
                QUnit.test("Regex Entity - MatchInnerNamedGroupTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.matchInnerNamedGroupTest2);
                QUnit.test("Regex Entity - GroupOrderingTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.groupOrderingTest);
                QUnit.test("Regex Entity - RepeatingGroupTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.repeatingGroupTest);
                QUnit.test("Regex Entity - ZeroResultTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.zeroResultTest);
                QUnit.test("Regex Entity - NonCapturingGroupsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests.nonCapturingGroupsTest);
                QUnit.test("RegexGroupCollection - CaseDataTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests.caseDataTest);
                QUnit.test("RegexGroupCollection - GroupCollectionFieldsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests.groupCollectionFieldsTest);
                QUnit.test("RegexGroupCollection - GroupCollectionForeachTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests.groupCollectionForeachTest);
                QUnit.test("RegexGroupCollection - GroupCollectionEnumeratorTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests.groupCollectionEnumeratorTest);
                QUnit.test("RegexGroupCollection - GroupCollectionCopyToTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests.groupCollectionCopyToTest);
                QUnit.test("Regex IMNSX - MsdnMultilineInlineOptionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.msdnMultilineInlineOptionTest);
                QUnit.test("Regex IMNSX - MsdnSinglelineInlineOptionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.msdnSinglelineInlineOptionTest);
                QUnit.test("Regex IMNSX - MsdnIngoreWhitespaceInlineOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.msdnIngoreWhitespaceInlineOptionTest1);
                QUnit.test("Regex IMNSX - MsdnIngoreWhitespaceInlineOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.msdnIngoreWhitespaceInlineOptionTest2);
                QUnit.test("Regex IMNSX - MsdnIngoreWhitespaceInlineOptionTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.msdnIngoreWhitespaceInlineOptionTest3);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest1);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest2);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest3);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest4);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest5", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest5);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest6", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest6);
                QUnit.test("Regex IMNSX - MultilineInlineOptionTest7", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.multilineInlineOptionTest7);
                QUnit.test("Regex IMNSX - SinglelineInlineOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.singlelineInlineOptionTest1);
                QUnit.test("Regex IMNSX - SinglelineInlineOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.singlelineInlineOptionTest2);
                QUnit.test("Regex IMNSX - SinglelineInlineOptionTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.singlelineInlineOptionTest3);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest1);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest2);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest3);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest4", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest4);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest5", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest5);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest6", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest6);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest7", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest7);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest8", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest8);
                QUnit.test("Regex IMNSX - IngoreWhitespaceInlineOptionTest9", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.ingoreWhitespaceInlineOptionTest9);
                QUnit.test("Regex IMNSX - InlineCommentTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests.inlineCommentTest1);
                QUnit.test("RegexMatchCollection - CaseDataTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.caseDataTest);
                QUnit.test("RegexMatchCollection - MatchCollectionFieldsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.matchCollectionFieldsTest);
                QUnit.test("RegexMatchCollection - MatchCollectionItemsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.matchCollectionItemsTest);
                QUnit.test("RegexMatchCollection - MatchCollectionForeachTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.matchCollectionForeachTest);
                QUnit.test("RegexMatchCollection - MatchCollectionEnumeratorTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.matchCollectionEnumeratorTest);
                QUnit.test("RegexMatchCollection - MatchCollectionCopyToTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.matchCollectionCopyToTest);
                QUnit.test("RegexMatchCollection - MatchCollectionWithEmptyPatternTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests.matchCollectionWithEmptyPatternTest);
                QUnit.test("Match Entity - CaseDataTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.caseDataTest);
                QUnit.test("Match Entity - MatchEmptyPatternTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.matchEmptyPatternTest);
                QUnit.test("Match Entity - MatchEmptyFieldsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.matchEmptyFieldsTest);
                QUnit.test("Match Entity - MatchNextMatchTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.matchNextMatchTest);
                QUnit.test("Match Entity - MatchNextMatchWithEmptyPatternTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.matchNextMatchWithEmptyPatternTest);
                QUnit.test("Match Entity - MatchResultTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.matchResultTest);
                QUnit.test("Match Entity - MatchSearchGroupByNameTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests.matchSearchGroupByNameTest);
                QUnit.test("MatchSparse Entity - GroupOrderingTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests.groupOrderingTest1);
                QUnit.test("MatchSparse Entity - GroupOrderingTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests.groupOrderingTest2);
                QUnit.test("MatchSparse Entity - GroupOrderingTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests.groupOrderingTest3);
                QUnit.test("MatchSparse Entity - SparseOrderingTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests.sparseOrderingTest);
                QUnit.test("MatchSparse Entity - GroupCapturesMergeTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests.groupCapturesMergeTest);
                QUnit.test("RegexOptions - MsdnIgnoreCaseOptionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.msdnIgnoreCaseOptionTest);
                QUnit.test("RegexOptions - MsdnMultilineOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.msdnMultilineOptionTest1);
                QUnit.test("RegexOptions - MsdnMultilineOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.msdnMultilineOptionTest2);
                QUnit.test("RegexOptions - MsdnSinglelineOptionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.msdnSinglelineOptionTest);
                QUnit.test("RegexOptions - MsdnIgnoreWhitespaceOptionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.msdnIgnoreWhitespaceOptionTest);
                QUnit.test("RegexOptions - IgnoreCaseOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.ignoreCaseOptionTest1);
                QUnit.test("RegexOptions - IgnoreCaseOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.ignoreCaseOptionTest2);
                QUnit.test("RegexOptions - IgnoreCaseOptionTest3", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.ignoreCaseOptionTest3);
                QUnit.test("RegexOptions - DefaultLineOptionsTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.defaultLineOptionsTest1);
                QUnit.test("RegexOptions - DefaultLineOptionsTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.defaultLineOptionsTest2);
                QUnit.test("RegexOptions - MultilineOptionTest1", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.multilineOptionTest1);
                QUnit.test("RegexOptions - MultilineOptionTest2", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.multilineOptionTest2);
                QUnit.test("RegexOptions - SinglelineOptionTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.singlelineOptionTest);
                QUnit.test("RegexOptions - SinglelineDotCharTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.singlelineDotCharTest);
                QUnit.test("RegexOptions - MultilineAndSinglelineOptionsTest", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests.multilineAndSinglelineOptionsTest);
                QUnit.test("Regex Timeouts - RegexTimeoutValidationWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexTimeoutValidationWorks);
                QUnit.test("Regex Timeouts - RegexIsMatchWorksWithShortTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexIsMatchWorksWithShortTimeout);
                QUnit.test("Regex Timeouts - RegexIsMatchWorksWithLongTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexIsMatchWorksWithLongTimeout);
                QUnit.test("Regex Timeouts - RegexMatchWorksWithShortTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexMatchWorksWithShortTimeout);
                QUnit.test("Regex Timeouts - RegexMatchWorksWithLongTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexMatchWorksWithLongTimeout);
                QUnit.test("Regex Timeouts - RegexNextMatchWorksWithShortTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexNextMatchWorksWithShortTimeout);
                QUnit.test("Regex Timeouts - RegexNextMatchWorksWithLongTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexNextMatchWorksWithLongTimeout);
                QUnit.test("Regex Timeouts - RegexReplaceWorksWithShortTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexReplaceWorksWithShortTimeout);
                QUnit.test("Regex Timeouts - RegexReplaceWorksWithLongTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexReplaceWorksWithLongTimeout);
                QUnit.test("Regex Timeouts - RegexReplaceEvaluatorWorksWithShortTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexReplaceEvaluatorWorksWithShortTimeout);
                QUnit.test("Regex Timeouts - RegexReplaceEvaluatorWorksWithLongTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexReplaceEvaluatorWorksWithLongTimeout);
                QUnit.test("Regex Timeouts - RegexSplitWorksWithShortTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexSplitWorksWithShortTimeout);
                QUnit.test("Regex Timeouts - RegexSplitWorksWithLongTimeout", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests.regexSplitWorksWithLongTimeout);
                QUnit.module("RegexJS");
                QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.typePropertiesAreCorrect);
                QUnit.test("StringOnlyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.stringOnlyConstructorWorks);
                QUnit.test("ConstructorWithFlagsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.constructorWithFlagsWorks);
                QUnit.test("GlobalFlagWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.globalFlagWorks);
                QUnit.test("IgnoreCaseFlagWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.ignoreCaseFlagWorks);
                QUnit.test("MultilineFlagWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.multilineFlagWorks);
                QUnit.test("PatternPropertyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.patternPropertyWorks);
                QUnit.test("SourcePropertyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.sourcePropertyWorks);
                QUnit.test("ExecWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.execWorks);
                QUnit.test("LastIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.lastIndexWorks);
                QUnit.test("TestWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.testWorks);
                QUnit.test("EscapeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests.escapeWorks);
                QUnit.module("Simple types");
                QUnit.test("Boolean - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.typePropertiesAreCorrect);
                QUnit.test("Boolean - DefaultValueIsFalse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.defaultValueIsFalse);
                QUnit.test("Boolean - CreatingInstanceReturnsFalse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.creatingInstanceReturnsFalse);
                QUnit.test("Boolean - DefaultConstructorReturnsFalse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.defaultConstructorReturnsFalse);
                QUnit.test("Boolean - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.getHashCodeWorks);
                QUnit.test("Boolean - ObjectEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.objectEqualsWorks);
                QUnit.test("Boolean - BoolEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.boolEqualsWorks);
                QUnit.test("Boolean - LogicalExclusiveOrWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.logicalExclusiveOrWorks);
                QUnit.test("Boolean - LogicalAndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.logicalAndWorks);
                QUnit.test("Boolean - LogicalNegationWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.logicalNegationWorks);
                QUnit.test("Boolean - ConditionalOperatorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.conditionalOperatorWorks);
                QUnit.test("Boolean - ConditionalAndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.conditionalAndWorks);
                QUnit.test("Boolean - ConditionalOrWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.conditionalOrWorks);
                QUnit.test("Boolean - EqualityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.equalityWorks);
                QUnit.test("Boolean - InequalityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.inequalityWorks);
                QUnit.test("Boolean - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.compareToWorks);
                QUnit.test("Boolean - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.iComparableCompareToWorks);
                QUnit.test("Boolean - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.parseWorks);
                QUnit.test("Boolean - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.tryParseWorks);
                QUnit.test("Boolean - BoolStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests.boolStringWorks);
                QUnit.test("Byte - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.typePropertiesAreCorrect);
                QUnit.test("Byte - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.castsWork);
                QUnit.test("Byte - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.defaultValueIs0);
                QUnit.test("Byte - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.defaultConstructorReturnsZero);
                QUnit.test("Byte - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.creatingInstanceReturnsZero);
                QUnit.test("Byte - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.constantsWork);
                QUnit.test("Byte - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.formatWorks);
                QUnit.test("Byte - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.iFormattableToStringWorks);
                QUnit.test("Byte - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.tryParseWorks);
                QUnit.test("Byte - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.parseWorks);
                QUnit.test("Byte - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.toStringWithoutRadixWorks);
                QUnit.test("Byte - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.toStringWithRadixWorks);
                QUnit.test("Byte - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.getHashCodeWorks);
                QUnit.test("Byte - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.equalsWorks);
                QUnit.test("Byte - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.iEquatableEqualsWorks);
                QUnit.test("Byte - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.compareToWorks);
                QUnit.test("Byte - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests.iComparableCompareToWorks);
                QUnit.test("Char - TypePropertiesAreInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.typePropertiesAreInt32);
                QUnit.test("Char - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.castsWork);
                QUnit.test("Char - DefaultValueWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.defaultValueWorks);
                QUnit.test("Char - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.defaultConstructorReturnsZero);
                QUnit.test("Char - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.creatingInstanceReturnsZero);
                QUnit.test("Char - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.constantsWork);
                QUnit.test("Char - CharComparisonWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.charComparisonWorks);
                QUnit.test("Char - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.parseWorks);
                QUnit.test("Char - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.formatWorks);
                QUnit.test("Char - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.iFormattableToStringWorks);
                QUnit.test("Char - ToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.toStringWorks);
                QUnit.test("Char - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.getHashCodeWorks);
                QUnit.test("Char - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.equalsWorks);
                QUnit.test("Char - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.iEquatableEqualsWorks);
                QUnit.test("Char - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.compareToWorks);
                QUnit.test("Char - IsLowerWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.isLowerWorks);
                QUnit.test("Char - IsUpperWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.isUpperWorks);
                QUnit.test("Char - ToLowerWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.toLowerWorks);
                QUnit.test("Char - ToUpperWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.toUpperWorks);
                QUnit.test("Char - IsDigitWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.isDigitWorks);
                QUnit.test("Char - IsWhiteSpaceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.isWhiteSpaceWorks);
                QUnit.test("Char - IsDigitWithStringAndIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.isDigitWithStringAndIndexWorks);
                QUnit.test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests.isWhiteSpaceWithStringAndIndexWorks);
                QUnit.test("Decimal - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.typePropertiesAreCorrect);
                QUnit.test("Decimal - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.defaultValueIs0);
                QUnit.test("Decimal - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.creatingInstanceReturnsZero);
                QUnit.test("Decimal - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.constantsWork);
                QUnit.test("Decimal - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.defaultConstructorReturnsZero);
                QUnit.test("Decimal - ConvertingConstructorsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.convertingConstructorsWork);
                QUnit.test("Decimal - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.formatWorks);
                QUnit.test("Decimal - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.iFormattableToStringWorks);
                QUnit.test("Decimal - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.toStringWithoutRadixWorks);
                QUnit.test("Decimal - AddWithStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.addWithStringWorks);
                QUnit.test("Decimal - ConversionsToDecimalWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.conversionsToDecimalWork);
                QUnit.test("Decimal - ConversionsFromDecimalWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.conversionsFromDecimalWork);
                QUnit.test("Decimal - OperatorsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.operatorsWork);
                QUnit.test("Decimal - AddWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.addWorks);
                QUnit.test("Decimal - CeilingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.ceilingWorks);
                QUnit.test("Decimal - DivideWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.divideWorks);
                QUnit.test("Decimal - FloorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.floorWorks);
                QUnit.test("Decimal - RemainderWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.remainderWorks);
                QUnit.test("Decimal - MultiplyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.multiplyWorks);
                QUnit.test("Decimal - NegateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.negateWorks);
                QUnit.test("Decimal - RoundWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.roundWorks);
                QUnit.test("Decimal - RoundWithModeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.roundWithModeWorks);
                QUnit.test("Decimal - SubtractWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.subtractWorks);
                QUnit.test("Decimal - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.getHashCodeWorks);
                QUnit.test("Decimal - ObjectEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.objectEqualsWorks);
                QUnit.test("Decimal - DecimalEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.decimalEqualsWorks);
                QUnit.test("Decimal - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.compareToWorks);
                QUnit.test("Decimal - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.iComparableCompareToWorks);
                QUnit.test("Decimal - FullCoalesceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.fullCoalesceWorks);
                QUnit.test("Decimal - ShortCoalesceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests.shortCoalesceWorks);
                QUnit.test("Double - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.typePropertiesAreCorrect);
                QUnit.test("Double - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.defaultValueIs0);
                QUnit.test("Double - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.creatingInstanceReturnsZero);
                QUnit.test("Double - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.constantsWork);
                QUnit.test("Double - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.defaultConstructorReturnsZero);
                QUnit.test("Double - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.formatWorks);
                QUnit.test("Double - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.iFormattableToStringWorks);
                QUnit.test("Double - ToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toStringWorks);
                QUnit.test("Double - ToExponentialWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toExponentialWorks);
                QUnit.test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toExponentialWithFractionalDigitsWorks);
                QUnit.test("Double - ToFixed", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toFixed);
                QUnit.test("Double - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toFixedWithFractionalDigitsWorks);
                QUnit.test("Double - ToPrecisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toPrecisionWorks);
                QUnit.test("Double - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.toPrecisionWithPrecisionWorks);
                QUnit.test("Double - IsPositiveInfinityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.isPositiveInfinityWorks);
                QUnit.test("Double - IsNegativeInfinityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.isNegativeInfinityWorks);
                QUnit.test("Double - IsInfinityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.isInfinityWorks);
                QUnit.test("Double - IsFiniteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.isFiniteWorks);
                QUnit.test("Double - IsNaNWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.isNaNWorks);
                QUnit.test("Double - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.getHashCodeWorks);
                QUnit.test("Double - ObjectEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.objectEqualsWorks);
                QUnit.test("Double - DoubleEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.doubleEqualsWorks);
                QUnit.test("Double - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.compareToWorks);
                QUnit.test("Double - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests.iComparableCompareToWorks);
                QUnit.test("Int16 - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.typePropertiesAreCorrect);
                QUnit.test("Int16 - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.castsWork);
                QUnit.test("Int16 - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.defaultValueIs0);
                QUnit.test("Int16 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.defaultConstructorReturnsZero);
                QUnit.test("Int16 - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.creatingInstanceReturnsZero);
                QUnit.test("Int16 - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.constantsWork);
                QUnit.test("Int16 - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.formatWorks);
                QUnit.test("Int16 - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.iFormattableToStringWorks);
                QUnit.test("Int16 - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.tryParseWorks);
                QUnit.test("Int16 - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.parseWorks);
                QUnit.test("Int16 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.toStringWithoutRadixWorks);
                QUnit.test("Int16 - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.toStringWithRadixWorks);
                QUnit.test("Int16 - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.getHashCodeWorks);
                QUnit.test("Int16 - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.equalsWorks);
                QUnit.test("Int16 - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.iEquatableEqualsWorks);
                QUnit.test("Int16 - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.compareToWorks);
                QUnit.test("Int16 - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests.iComparableCompareToWorks);
                QUnit.test("Int32 - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.typePropertiesAreCorrect);
                QUnit.test("Int32 - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.castsWork);
                QUnit.test("Int32 - TypeIsWorksForInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.typeIsWorksForInt32);
                QUnit.test("Int32 - TypeAsWorksForInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.typeAsWorksForInt32);
                QUnit.test("Int32 - UnboxingWorksForInt32", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.unboxingWorksForInt32);
                QUnit.test("Int32 - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.defaultValueIs0);
                QUnit.test("Int32 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.defaultConstructorReturnsZero);
                QUnit.test("Int32 - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.creatingInstanceReturnsZero);
                QUnit.test("Int32 - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.constantsWork);
                QUnit.test("Int32 - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.formatWorks);
                QUnit.test("Int32 - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.iFormattableToStringWorks);
                QUnit.test("Int32 - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.tryParseWorks);
                QUnit.test("Int32 - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.parseWorks);
                QUnit.test("Int32 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.toStringWithoutRadixWorks);
                QUnit.test("Int32 - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.toStringWithRadixWorks);
                QUnit.test("Int32 - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.getHashCodeWorks);
                QUnit.test("Int32 - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.equalsWorks);
                QUnit.test("Int32 - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.iEquatableEqualsWorks);
                QUnit.test("Int32 - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.compareToWorks);
                QUnit.test("Int32 - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.iComparableCompareToWorks);
                QUnit.test("Int32 - IntegerDivisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.integerDivisionWorks);
                QUnit.test("Int32 - IntegerModuloWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.integerModuloWorks);
                QUnit.test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.integerDivisionByZeroThrowsDivideByZeroException);
                QUnit.test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests.doublesAreTruncatedWhenConvertedToIntegers);
                QUnit.test("Int64 - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.typePropertiesAreCorrect);
                QUnit.test("Int64 - MinMaxValuesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.minMaxValuesAreCorrect);
                QUnit.test("Int64 - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.castsWork);
                QUnit.test("Int64 - OverflowWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.overflowWorks);
                QUnit.test("Int64 - CombinedTypesOperationsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.combinedTypesOperationsWork);
                QUnit.test("Int64 - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.defaultValueIs0);
                QUnit.test("Int64 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.defaultConstructorReturnsZero);
                QUnit.test("Int64 - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.creatingInstanceReturnsZero);
                QUnit.test("Int64 - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.formatWorks);
                QUnit.test("Int64 - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.iFormattableToStringWorks);
                QUnit.test("Int64 - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.tryParseWorks);
                QUnit.test("Int64 - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.parseWorks);
                QUnit.test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.castingOfLargeDoublesToInt64Works);
                QUnit.test("Int64 - DivisionOfLargeInt64Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.divisionOfLargeInt64Works);
                QUnit.test("Int64 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.toStringWithoutRadixWorks);
                QUnit.test("Int64 - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.toStringWithRadixWorks);
                QUnit.test("Int64 - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.getHashCodeWorks);
                QUnit.test("Int64 - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.equalsWorks);
                QUnit.test("Int64 - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.iEquatableEqualsWorks);
                QUnit.test("Int64 - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.compareToWorks);
                QUnit.test("Int64 - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.iComparableCompareToWorks);
                QUnit.test("Int64 - ShiftWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests.shiftWorks);
                QUnit.test("Object - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.typePropertiesAreCorrect);
                QUnit.test("Object - CanGetHashCodeForObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.canGetHashCodeForObject);
                QUnit.test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.repeatedCallsToGetHashCodeReturnsSameValue);
                QUnit.test("Object - ObjectIsEqualToItself", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.objectIsEqualToItself);
                QUnit.test("Object - ObjectIsNotEqualToOtherObject", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.objectIsNotEqualToOtherObject);
                QUnit.test("Object - StaticEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.staticEqualsWorks);
                QUnit.test("Object - ReferenceEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.referenceEqualsWorks);
                QUnit.test("Object - ToStringOverride", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests.toStringOverride);
                QUnit.test("SByte - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.typePropertiesAreCorrect);
                QUnit.test("SByte - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.castsWork);
                QUnit.test("SByte - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.defaultValueIs0);
                QUnit.test("SByte - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.defaultConstructorReturnsZero);
                QUnit.test("SByte - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.creatingInstanceReturnsZero);
                QUnit.test("SByte - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.constantsWork);
                QUnit.test("SByte - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.formatWorks);
                QUnit.test("SByte - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.iFormattableToStringWorks);
                QUnit.test("SByte - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.tryParseWorks);
                QUnit.test("SByte - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.parseWorks);
                QUnit.test("SByte - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.toStringWithoutRadixWorks);
                QUnit.test("SByte - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.toStringWithRadixWorks);
                QUnit.test("SByte - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.getHashCodeWorks);
                QUnit.test("SByte - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.equalsWorks);
                QUnit.test("SByte - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.iEquatableEqualsWorks);
                QUnit.test("SByte - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.compareToWorks);
                QUnit.test("SByte - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests.iComparableCompareToWorks);
                QUnit.test("Float - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.typePropertiesAreCorrect);
                QUnit.test("Float - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.defaultValueIs0);
                QUnit.test("Float - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.creatingInstanceReturnsZero);
                QUnit.test("Float - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.constantsWork);
                QUnit.test("Float - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.defaultConstructorReturnsZero);
                QUnit.test("Float - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.formatWorks);
                QUnit.test("Float - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.iFormattableToStringWorks);
                QUnit.test("Float - ToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toStringWorks);
                QUnit.test("Float - ToExponentialWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toExponentialWorks);
                QUnit.test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toExponentialWithFractionalDigitsWorks);
                QUnit.test("Float - ToFixed", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toFixed);
                QUnit.test("Float - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toFixedWithFractionalDigitsWorks);
                QUnit.test("Float - ToPrecisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toPrecisionWorks);
                QUnit.test("Float - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.toPrecisionWithPrecisionWorks);
                QUnit.test("Float - IsPositiveInfinityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.isPositiveInfinityWorks);
                QUnit.test("Float - IsNegativeInfinityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.isNegativeInfinityWorks);
                QUnit.test("Float - IsInfinityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.isInfinityWorks);
                QUnit.test("Float - IsFiniteWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.isFiniteWorks);
                QUnit.test("Float - IsNaNWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.isNaNWorks);
                QUnit.test("Float - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.getHashCodeWorks);
                QUnit.test("Float - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.equalsWorks);
                QUnit.test("Float - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.iEquatableEqualsWorks);
                QUnit.test("Float - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.compareToWorks);
                QUnit.test("Float - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests.iComparableCompareToWorks);
                QUnit.test("Version - TestConstructors", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion.testConstructors);
                QUnit.test("Version - TestCloneCompare", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion.testCloneCompare);
                QUnit.test("Version - TestEqualsGetHashCode", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion.testEqualsGetHashCode);
                QUnit.test("Version - TestToString", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion.testToString);
                QUnit.test("Version - TestParse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion.testParse);
                QUnit.test("Version - TestOperators", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion.testOperators);
                QUnit.test("Tuple - Tuple1Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple1Works);
                QUnit.test("Tuple - Tuple2Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple2Works);
                QUnit.test("Tuple - Tuple3Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple3Works);
                QUnit.test("Tuple - Tuple4Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple4Works);
                QUnit.test("Tuple - Tuple5Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple5Works);
                QUnit.test("Tuple - Tuple6Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple6Works);
                QUnit.test("Tuple - Tuple7Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple7Works);
                QUnit.test("Tuple - Tuple8Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests.tuple8Works);
                QUnit.test("UInt16 - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.typePropertiesAreCorrect);
                QUnit.test("UInt16 - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.castsWork);
                QUnit.test("UInt16 - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.defaultValueIs0);
                QUnit.test("UInt16 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.defaultConstructorReturnsZero);
                QUnit.test("UInt16 - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.creatingInstanceReturnsZero);
                QUnit.test("UInt16 - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.constantsWork);
                QUnit.test("UInt16 - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.formatWorks);
                QUnit.test("UInt16 - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.iFormattableToStringWorks);
                QUnit.test("UInt16 - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.tryParseWorks);
                QUnit.test("UInt16 - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.parseWorks);
                QUnit.test("UInt16 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.toStringWithoutRadixWorks);
                QUnit.test("UInt16 - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.toStringWithRadixWorks);
                QUnit.test("UInt16 - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.getHashCodeWorks);
                QUnit.test("UInt16 - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.equalsWorks);
                QUnit.test("UInt16 - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.iEquatableEqualsWorks);
                QUnit.test("UInt16 - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.compareToWorks);
                QUnit.test("UInt16 - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests.iComparableCompareToWorks);
                QUnit.test("UInt32 - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.typePropertiesAreCorrect);
                QUnit.test("UInt32 - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.castsWork);
                QUnit.test("UInt32 - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.defaultValueIs0);
                QUnit.test("UInt32 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.defaultConstructorReturnsZero);
                QUnit.test("UInt32 - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.creatingInstanceReturnsZero);
                QUnit.test("UInt32 - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.constantsWork);
                QUnit.test("UInt32 - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.formatWorks);
                QUnit.test("UInt32 - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.iFormattableToStringWorks);
                QUnit.test("UInt32 - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.tryParseWorks);
                QUnit.test("UInt32 - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.parseWorks);
                QUnit.test("UInt32 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.toStringWithoutRadixWorks);
                QUnit.test("UInt32 - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.toStringWithRadixWorks);
                QUnit.test("UInt32 - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.getHashCodeWorks);
                QUnit.test("UInt32 - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.equalsWorks);
                QUnit.test("UInt32 - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.iEquatableEqualsWorks);
                QUnit.test("UInt32 - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.compareToWorks);
                QUnit.test("UInt32 - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests.iComparableCompareToWorks);
                QUnit.test("UInt64 - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.typePropertiesAreCorrect);
                QUnit.test("UInt64 - MinMaxValuesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.minMaxValuesAreCorrect);
                QUnit.test("UInt64 - CastsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.castsWork);
                QUnit.test("UInt64 - OverflowWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.overflowWorks);
                QUnit.test("UInt64 - CombinedTypesOperationsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.combinedTypesOperationsWork);
                QUnit.test("UInt64 - DefaultValueIs0", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.defaultValueIs0);
                QUnit.test("UInt64 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.defaultConstructorReturnsZero);
                QUnit.test("UInt64 - CreatingInstanceReturnsZero", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.creatingInstanceReturnsZero);
                QUnit.test("UInt64 - ConstantsWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.constantsWork);
                QUnit.test("UInt64 - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.formatWorks);
                QUnit.test("UInt64 - IFormattableToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.iFormattableToStringWorks);
                QUnit.test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.castingOfLargeValuesToUInt64Works);
                QUnit.test("UInt64 - DivisionOfLargeUInt64Works", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.divisionOfLargeUInt64Works);
                QUnit.test("UInt64 - TryParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.tryParseWorks);
                QUnit.test("UInt64 - ParseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.parseWorks);
                QUnit.test("UInt64 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.toStringWithoutRadixWorks);
                QUnit.test("UInt64 - ToStringWithRadixWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.toStringWithRadixWorks);
                QUnit.test("UInt64 - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.getHashCodeWorks);
                QUnit.test("UInt64 - EqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.equalsWorks);
                QUnit.test("UInt64 - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.iEquatableEqualsWorks);
                QUnit.test("UInt64 - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.compareToWorks);
                QUnit.test("UInt64 - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests.iComparableCompareToWorks);
                QUnit.module("String");
                QUnit.test("StringFormatTests - Simple", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.simple);
                QUnit.test("StringFormatTests - ValueFormating", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.valueFormating);
                QUnit.test("StringFormatTests - SpaceControlling", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.spaceControlling);
                QUnit.test("StringFormatTests - Aligment", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.aligment);
                QUnit.test("StringFormatTests - PadIntegerWithLeadingZeros", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.padIntegerWithLeadingZeros);
                QUnit.test("StringFormatTests - PadIntegerWithSpecificNumberLeadingZeros", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.padIntegerWithSpecificNumberLeadingZeros);
                QUnit.test("StringFormatTests - PadNumericWithLeadingZerosToLength", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.padNumericWithLeadingZerosToLength);
                QUnit.test("StringFormatTests - PadNumericWithSpecificNumberOfLeadingZeros", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests.padNumericWithSpecificNumberOfLeadingZeros);
                QUnit.test("String - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.typePropertiesAreCorrect);
                QUnit.test("String - StringInterfaces", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.stringInterfaces);
                QUnit.test("String - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.defaultConstructorWorks);
                QUnit.test("String - CopyConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.copyConstructorWorks);
                QUnit.test("String - CharAndCountConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.charAndCountConstructorWorks);
                QUnit.test("String - CharArrayConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.charArrayConstructorWorks);
                QUnit.test("String - EmptyFieldWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.emptyFieldWorks);
                QUnit.test("String - LengthPropertyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lengthPropertyWorks);
                QUnit.test("String - CharAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.charAtWorks);
                QUnit.test("String - CharCodeAtWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.charCodeAtWorks);
                QUnit.test("String - CompareWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.compareWorks);
                QUnit.test("String - CompareWithIgnoreCaseArgWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.compareWithIgnoreCaseArgWorks);
                QUnit.test("String - ConcatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.concatWorks);
                QUnit.test("String - ConcatWithObjectsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.concatWithObjectsWorks);
                QUnit.test("String - EndsWithCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.endsWithCharWorks);
                QUnit.test("String - EndsWithStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.endsWithStringWorks);
                QUnit.test("String - StaticEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.staticEqualsWorks);
                QUnit.test("String - FormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.formatWorks);
                QUnit.test("String - FormatWorksExtended", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.formatWorksExtended);
                QUnit.test("String - FormatWorksWithIFormattable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.formatWorksWithIFormattable);
                QUnit.test("String - FormatCanUseEscapedBraces", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.formatCanUseEscapedBraces);
                QUnit.test("String - FromCharCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.fromCharCodeWorks);
                QUnit.test("String - IndexOfCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfCharWorks);
                QUnit.test("String - IndexOfStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfStringWorks);
                QUnit.test("String - IndexOfCharWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfCharWithStartIndexWorks);
                QUnit.test("String - IndexOfCharWithStartIndexAndCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfCharWithStartIndexAndCountWorks);
                QUnit.test("String - IndexOfStringWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfStringWithStartIndexWorks);
                QUnit.test("String - IndexOfStringWithStartIndexAndCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfStringWithStartIndexAndCountWorks);
                QUnit.test("String - IndexOfAnyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfAnyWorks);
                QUnit.test("String - IndexOfAnyWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfAnyWithStartIndexWorks);
                QUnit.test("String - IndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.indexOfAnyWithStartIndexAndCountWorks);
                QUnit.test("String - InsertWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.insertWorks);
                QUnit.test("String - IsNullOrEmptyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.isNullOrEmptyWorks);
                QUnit.test("String - LastIndexOfCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfCharWorks);
                QUnit.test("String - LastIndexOfStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfStringWorks);
                QUnit.test("String - LastIndexOfCharWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfCharWithStartIndexWorks);
                QUnit.test("String - LastIndexOfStringWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfStringWithStartIndexWorks);
                QUnit.test("String - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfCharWithStartIndexAndCountWorks);
                QUnit.test("String - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfStringWithStartIndexAndCountWorks);
                QUnit.test("String - LastIndexOfAnyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfAnyWorks);
                QUnit.test("String - LastIndexOfAnyWithStartIndexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfAnyWithStartIndexWorks);
                QUnit.test("String - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.lastIndexOfAnyWithStartIndexAndCountWorks);
                QUnit.test("String - LocaleCompareWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.localeCompareWorks);
                QUnit.test("String - MatchWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.matchWorks);
                QUnit.test("String - PadLeftWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.padLeftWorks);
                QUnit.test("String - PadLeftWithCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.padLeftWithCharWorks);
                QUnit.test("String - PadRightWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.padRightWorks);
                QUnit.test("String - PadRightWithCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.padRightWithCharWorks);
                QUnit.test("String - RemoveWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.removeWorks);
                QUnit.test("String - RemoveWithCountWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.removeWithCountWorks);
                QUnit.test("String - ReplaceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.replaceWorks);
                QUnit.test("String - ReplaceCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.replaceCharWorks);
                QUnit.test("String - ReplaceRegexWithReplaceTextWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.replaceRegexWithReplaceTextWorks);
                QUnit.test("String - ReplaceRegexWithReplaceCallbackWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.replaceRegexWithReplaceCallbackWorks);
                QUnit.test("String - SearchWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.searchWorks);
                QUnit.test("String - SliceWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.sliceWorks);
                QUnit.test("String - SplitWithStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithStringWorks);
                QUnit.test("String - SplitWithCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithCharWorks);
                QUnit.test("String - JsSplitWithStringAndLimitWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.jsSplitWithStringAndLimitWorks);
                QUnit.test("String - JsSplitWithCharAndLimitWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.jsSplitWithCharAndLimitWorks);
                QUnit.test("String - SplitWithCharsAndLimitWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithCharsAndLimitWorks);
                QUnit.test("String - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithCharsAndStringSplitOptionsAndLimitWorks);
                QUnit.test("String - SplitWithRegexWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithRegexWorks);
                QUnit.test("String - SomeNetSplitTests", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.someNetSplitTests);
                QUnit.test("String - SplitWithCharsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithCharsWorks);
                QUnit.test("String - SplitWithStringsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithStringsWorks);
                QUnit.test("String - SplitWithStringsAndLimitWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.splitWithStringsAndLimitWorks);
                QUnit.test("String - StartsWithCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.startsWithCharWorks);
                QUnit.test("String - StartsWithStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.startsWithStringWorks);
                QUnit.test("String - SubstrWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.substrWorks);
                QUnit.test("String - SubstringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.substringWorks);
                QUnit.test("String - JsSubstringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.jsSubstringWorks);
                QUnit.test("String - ToLowerCaseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.toLowerCaseWorks);
                QUnit.test("String - ToUpperCaseWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.toUpperCaseWorks);
                QUnit.test("String - ToLowerWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.toLowerWorks);
                QUnit.test("String - ToUpperWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.toUpperWorks);
                QUnit.test("String - TrimWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.trimWorks);
                QUnit.test("String - TrimCharsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.trimCharsWorks);
                QUnit.test("String - TrimStartCharsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.trimStartCharsWorks);
                QUnit.test("String - TrimEndCharsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.trimEndCharsWorks);
                QUnit.test("String - TrimStartWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.trimStartWorks);
                QUnit.test("String - TrimEndWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.trimEndWorks);
                QUnit.test("String - StringEqualityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.stringEqualityWorks);
                QUnit.test("String - StringInequalityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.stringInequalityWorks);
                QUnit.test("String - StringIndexingWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.stringIndexingWorks);
                QUnit.test("String - GetHashCodeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.getHashCodeWorks);
                QUnit.test("String - InstanceEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.instanceEqualsWorks);
                QUnit.test("String - IEquatableEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.iEquatableEqualsWorks);
                QUnit.test("String - StringEqualsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.stringEqualsWorks);
                QUnit.test("String - CompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.compareToWorks);
                QUnit.test("String - IComparableCompareToWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.iComparableCompareToWorks);
                QUnit.test("String - JoinWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.joinWorks);
                QUnit.test("String - ContainsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.containsWorks);
                QUnit.test("String - ToCharArrayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.toCharArrayWorks);
                QUnit.test("String - Strings", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.strings);
                QUnit.test("String - Enumerable", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests.enumerable);
                QUnit.test("StringBuilder - TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.typePropertiesAreCorrect);
                QUnit.test("StringBuilder - DefaultConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.defaultConstructorWorks);
                QUnit.test("StringBuilder - ConstructorWithCapacityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.constructorWithCapacityWorks);
                QUnit.test("StringBuilder - InitialTextConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.initialTextConstructorWorks);
                QUnit.test("StringBuilder - InitialTextConstructorWithCapacityWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.initialTextConstructorWithCapacityWorks);
                QUnit.test("StringBuilder - SubstringConstructorWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.substringConstructorWorks);
                QUnit.test("StringBuilder - AppendBoolWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendBoolWorks);
                QUnit.test("StringBuilder - AppendCharWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendCharWorks);
                QUnit.test("StringBuilder - AppendIntWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendIntWorks);
                QUnit.test("StringBuilder - AppendDoubleWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendDoubleWorks);
                QUnit.test("StringBuilder - AppendObjectWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendObjectWorks);
                QUnit.test("StringBuilder - AppendStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendStringWorks);
                QUnit.test("StringBuilder - AppendLineWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendLineWorks);
                QUnit.test("StringBuilder - AppendLineStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.appendLineStringWorks);
                QUnit.test("StringBuilder - ClearWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.clearWorks);
                QUnit.test("StringBuilder - ToStringWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.toStringWorks);
                QUnit.test("StringBuilder - LengthPropertyWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.lengthPropertyWorks);
                QUnit.test("StringBuilder - StringBuilders", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests.stringBuilders);
                QUnit.module("System interface");
                QUnit.test("IComparable - CallingMethodThroughIComparableInterfaceInvokesImplementingMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IComparableTests.callingMethodThroughIComparableInterfaceInvokesImplementingMethod);
                QUnit.test("IEquatable - CallingMethodThroughIComparableInterfaceInvokesImplementingMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IEquatableTests.callingMethodThroughIComparableInterfaceInvokesImplementingMethod);
                QUnit.module("Threading");
                QUnit.test("Async - AsyncVoid", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests.asyncVoid);
                QUnit.test("Async - AsyncTask", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests.asyncTask);
                QUnit.test("Async - AsyncTaskBodyThrowsException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests.asyncTaskBodyThrowsException);
                QUnit.test("Async - AwaitTaskThatFaults", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests.awaitTaskThatFaults);
                QUnit.test("Async - AggregateExceptionsAreUnwrappedWhenAwaitingTask", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests.aggregateExceptionsAreUnwrappedWhenAwaitingTask);
                QUnit.test("Async - AsyncTaskThatReturnsValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests.asyncTaskThatReturnsValue);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenSourceAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.typePropertiesForCancellationTokenSourceAreCorrect);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.typePropertiesForCancellationTokenAreCorrect);
                QUnit.test("CancellationToken - TypePropertiesForCancellationTokenRegistrationAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.typePropertiesForCancellationTokenRegistrationAreCorrect);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe);
                QUnit.test("CancellationToken - CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled);
                QUnit.test("CancellationToken - CancellationTokenNoneIsNotCancelledAndCannotBe", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancellationTokenNoneIsNotCancelledAndCannotBe);
                QUnit.test("CancellationToken - CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
                QUnit.test("CancellationToken - ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
                QUnit.test("CancellationToken - CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource);
                QUnit.test("CancellationToken - IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod);
                QUnit.test("CancellationToken - ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled);
                QUnit.test("CancellationToken - CancelWithoutArgumentsWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancelWithoutArgumentsWorks);
                QUnit.test("CancellationToken - CancelWorksWhenThrowOnFirstExceptionIsFalse", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancelWorksWhenThrowOnFirstExceptionIsFalse);
                QUnit.test("CancellationToken - CancelWorksWhenThrowOnFirstExceptionIsTrue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.cancelWorksWhenThrowOnFirstExceptionIsTrue);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithoutContextInvokesTheCallback", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerOnACancelledSourceWithoutContextInvokesTheCallback);
                QUnit.test("CancellationToken - RegisterWithArgumentOnACancelledSourceInvokesTheCallback", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerWithArgumentOnACancelledSourceInvokesTheCallback);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithoutContextRethrowsAThrownException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerOnACancelledSourceWithoutContextRethrowsAThrownException);
                QUnit.test("CancellationToken - RegisterOnACancelledSourceWithContextRethrowsAThrownException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerOnACancelledSourceWithContextRethrowsAThrownException);
                QUnit.test("CancellationToken - RegisterOverloadsWithUseSynchronizationContextWork", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerOverloadsWithUseSynchronizationContextWork);
                QUnit.test("CancellationToken - RegisterOnCancellationTokenCreatedNonCancelledDoesNothing", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerOnCancellationTokenCreatedNonCancelledDoesNothing);
                QUnit.test("CancellationToken - RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately);
                QUnit.test("CancellationToken - DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.duplicateCancelDoesNotCauseCallbacksToBeCalledTwice);
                QUnit.test("CancellationToken - RegistrationsCanBeCompared", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registrationsCanBeCompared);
                QUnit.test("CancellationToken - RegistrationsCanBeUnregistered", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.registrationsCanBeUnregistered);
                QUnit.test("CancellationToken - CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm);
                QUnit.test("CancellationToken - LinkedSourceWithTwoTokensWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.linkedSourceWithTwoTokensWorks);
                QUnit.test("CancellationToken - LinkedSourceWithThreeTokensWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests.linkedSourceWithThreeTokensWorks);
                QUnit.test("Promise - TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests.taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes);
                QUnit.test("Promise - TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests.taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes);
                QUnit.test("Promise - TaskFromPromiseWorksWhenPromiseFails", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests.taskFromPromiseWorksWhenPromiseFails);
                QUnit.test("Promise - CompletingPromiseCanBeAwaited", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests.completingPromiseCanBeAwaited);
                QUnit.test("Promise - FailingPromiseCanBeAwaited", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests.failingPromiseCanBeAwaited);
                QUnit.test("Promise - TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests.taskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes);
                QUnit.test("Tasks - TaskCompletionSourceTypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.taskCompletionSourceTypePropertiesAreCorrect);
                QUnit.test("Tasks - TaskTypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.taskTypePropertiesAreCorrect);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingResult", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.taskCompletionSourceWorksWhenSettingResult);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingASingleException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.taskCompletionSourceWorksWhenSettingASingleException);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenSettingTwoExceptions", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.taskCompletionSourceWorksWhenSettingTwoExceptions);
                QUnit.test("Tasks - TaskCompletionSourceWorksWhenCancelling", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.taskCompletionSourceWorksWhenCancelling);
                QUnit.test("Tasks - CancelledTaskThrowsTaskCanceledExceptionWhenAwaited", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.cancelledTaskThrowsTaskCanceledExceptionWhenAwaited);
                QUnit.test("Tasks - CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed);
                QUnit.test("Tasks - SetResultFailsWhenTheTaskIsCompleted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.setResultFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - SetCanceledFailsWhenTheTaskIsCompleted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.setCanceledFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - SetExceptionFailsWhenTheTaskIsCompleted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.setExceptionFailsWhenTheTaskIsCompleted);
                QUnit.test("Tasks - CompletedTaskHasCorrectIsXProperties", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.completedTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - CancelledTaskHasCorrectIsXProperties", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.cancelledTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - FaultedTaskHasCorrectIsXProperties", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.faultedTaskHasCorrectIsXProperties);
                QUnit.test("Tasks - TrySetResultReturnsFalseWhenTheTaskIsCompleted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.trySetResultReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - TrySetCanceledReturnsFalseWhenTheTaskIsCompleted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.trySetCanceledReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - TrySetExceptionReturnsFalseWhenTheTaskIsCompleted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.trySetExceptionReturnsFalseWhenTheTaskIsCompleted);
                QUnit.test("Tasks - ContinueWithForNonGenericTaskWorkWithNoResultAndNoException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.continueWithForNonGenericTaskWorkWithNoResultAndNoException);
                QUnit.test("Tasks - ContinueWithWhenCallbackThrowsAnException", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.continueWithWhenCallbackThrowsAnException);
                QUnit.test("Tasks - ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask);
                QUnit.test("Tasks - ContinueWithForNonGenericTaskCanReturnAValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.continueWithForNonGenericTaskCanReturnAValue);
                QUnit.test("Tasks - ContinueWithWithNoReturnValueForGenericTaskWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.continueWithWithNoReturnValueForGenericTaskWorks);
                QUnit.test("Tasks - ContinueWithForGenericTaskCanReturnAValue", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.continueWithForGenericTaskCanReturnAValue);
                QUnit.test("Tasks - DelayWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.delayWorks);
                QUnit.test("Tasks - FromResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.fromResultWorks);
                QUnit.test("Tasks - RunWithoutResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.runWithoutResultWorks);
                QUnit.test("Tasks - RunWithResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.runWithResultWorks);
                QUnit.test("Tasks - RunWorksWhenBodyThrows", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.runWorksWhenBodyThrows);
                QUnit.test("Tasks - WhenAllParamArrayWithResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAllParamArrayWithResultWorks);
                QUnit.test("Tasks - WhenAllEnumerableWithResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAllEnumerableWithResultWorks);
                QUnit.test("Tasks - WhenAllParamArrayWithoutResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAllParamArrayWithoutResultWorks);
                QUnit.test("Tasks - WhenAllEnumerableWithoutResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAllEnumerableWithoutResultWorks);
                QUnit.test("Tasks - WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted);
                QUnit.test("Tasks - WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled);
                QUnit.test("Tasks - WhenAnyParamArrayWithResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAnyParamArrayWithResultWorks);
                QUnit.test("Tasks - WhenAnyEnumerableWithResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAnyEnumerableWithResultWorks);
                QUnit.test("Tasks - WhenAnyParamArrayWithoutResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAnyParamArrayWithoutResultWorks);
                QUnit.test("Tasks - WhenAnyEnumerableWithoutResultWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAnyEnumerableWithoutResultWorks);
                QUnit.test("Tasks - WhenAnyFaultsIfTheFirstTaskFaulted", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAnyFaultsIfTheFirstTaskFaulted);
                QUnit.test("Tasks - WhenAnyIsCancelledIfTheFirstTaskWasCancelled", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.whenAnyIsCancelledIfTheFirstTaskWasCancelled);
                QUnit.test("Tasks - ConstructorWithOnlyActionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.constructorWithOnlyActionWorks);
                QUnit.test("Tasks - ConstructorWithActionAndStateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.constructorWithActionAndStateWorks);
                QUnit.test("Tasks - ExceptionInManuallyCreatedTaskIsStoredOnTheTask", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.exceptionInManuallyCreatedTaskIsStoredOnTheTask);
                QUnit.test("Tasks - ConstructorWithOnlyFunctionWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.constructorWithOnlyFunctionWorks);
                QUnit.test("Tasks - ConstructorWithFunctionAndStateWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests.constructorWithFunctionAndStateWorks);
                QUnit.test("TimerTests - TestTimerThrows", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests.testTimerThrows);
                QUnit.test("TimerTests - TestStaticCallbackWithDispose", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests.testStaticCallbackWithDispose);
                QUnit.test("TimerTests - TestStaticCallbackWithChange", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests.testStaticCallbackWithChange);
                QUnit.test("TimerTests - TestInstanceCallbackWithDispose", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests.testInstanceCallbackWithDispose);
                QUnit.test("TimerTests - TestInstanceCallbackWithChange", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests.testInstanceCallbackWithChange);
                QUnit.test("TimerTests - TestInfiniteTimer", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests.testInfiniteTimer);
                QUnit.module("Type system");
                QUnit.test("Type - GettingBaseTypeWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TypeSystemTests.gettingBaseTypeWorks);
                QUnit.test("Type - IsAssignableFromWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TypeSystemTests.isAssignableFromWorks);
                QUnit.module("Utilities");
                QUnit.test("Environment - NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_EnvironmentTests.newLineIsAStringContainingOnlyTheNewLineChar);
                QUnit.module("СultureInfo");
                QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests.typePropertiesAreCorrect);
                QUnit.test("GetFormatWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests.getFormatWorks);
                QUnit.test("InvariantWorks", Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests.invariantWorks);
            }
        },
        $entryPoint: true
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().lengthWorks();
            },
            rankIsOne: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().rankIsOne();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().getLengthWorks();
            },
            getLowerBound: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().getLowerBound();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().getUpperBoundWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().gettingValueByIndexWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().getValueWorks();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().setValueWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().foreachWorks();
            },
            cloneWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().cloneWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().concatWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().containsUsesEqualsMethod();
            },
            allWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().allWithArrayItemFilterCallbackWorks();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sliceWithoutEndWorks();
            },
            foreachWithArrayItemCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().foreachWithArrayItemCallbackWorks();
            },
            foreachWithArrayCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().foreachWithArrayCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().indexOfWithStartIndexWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().joinWithoutDelimiterWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().reverseWorks();
            },
            anyWithArrayItemFilterCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().anyWithArrayItemFilterCallbackWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().binarySearch4Works();
            },
            binarySearchExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().binarySearchExceptionsWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sortWithDefaultCompareWorks();
            },
            sort1Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sort1Works();
            },
            sort2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sort2Works();
            },
            sort3Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sort3Works();
            },
            sort4Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sort4Works();
            },
            sortExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().sortExceptionsWorks();
            },
            foreachWhenCastToIListWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().foreachWhenCastToIListWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iCollectionRemoveWorks();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet1).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet1);
                t.getFixture().iListRemoveAtWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2)],
        statics: {
            testArrayAsIListOfT: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testArrayAsIListOfT();
            },
            testTrivials: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testTrivials();
            },
            testGetAndSetValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testGetAndSetValue();
            },
            testClear: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testClear();
            },
            testCopy_GCRef: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testCopy_GCRef();
            },
            testCopy_VTToObj: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testCopy_VTToObj();
            },
            testCopy_VTWithGCRef: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testCopy_VTWithGCRef();
            },
            testCopy_VTNoGCRef: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testCopy_VTNoGCRef();
            },
            testFind: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testFind();
            },
            testForEach: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testForEach();
            },
            testGetEnumerator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testGetEnumerator();
            },
            testIndexOf: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testIndexOf();
            },
            testLastIndexOf: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testLastIndexOf();
            },
            testResize: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testResize();
            },
            testReverse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testReverse();
            },
            testSort: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testSort();
            },
            testTrueForAll: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testTrueForAll();
            },
            testSetValueCasting: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testSetValueCasting();
            },
            testValueTypeToReferenceCopy: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testValueTypeToReferenceCopy();
            },
            testReferenceToValueTypeCopy: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testReferenceToValueTypeCopy();
            },
            testArrayConstructionMultidimArrays: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ArrayTests1.ArrayTestsSet2).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ArrayTestsSet2);
                Bridge.ClientTest.ArrayTests1.ArrayTestsSet2.testArrayConstructionMultidimArrays();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass)],
        statics: {
            testB: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass, 3);
                Bridge.ClientTest.BasicCSharp.TestAbstractClass.testB();
            },
            testC: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass, 3);
                Bridge.ClientTest.BasicCSharp.TestAbstractClass.testC();
            },
            testBC: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestAbstractClass).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestAbstractClass, 6);
                Bridge.ClientTest.BasicCSharp.TestAbstractClass.testBC();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum)],
        statics: {
            testParse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 6);
                Bridge.ClientTest.BasicCSharp.TestEnum.testParse();
            },
            testParseIgnoreCase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 4);
                Bridge.ClientTest.BasicCSharp.TestEnum.testParseIgnoreCase();
            },
            testToString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 4);
                Bridge.ClientTest.BasicCSharp.TestEnum.testToString();
            },
            testGetValues: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 2);
                Bridge.ClientTest.BasicCSharp.TestEnum.testGetValues();
            },
            testCompareTo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 3);
                Bridge.ClientTest.BasicCSharp.TestEnum.testCompareTo();
            },
            testFormat: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 22);
                Bridge.ClientTest.BasicCSharp.TestEnum.testFormat();
            },
            testGetName: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 3);
                Bridge.ClientTest.BasicCSharp.TestEnum.testGetName();
            },
            testGetNames: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 2);
                Bridge.ClientTest.BasicCSharp.TestEnum.testGetNames();
            },
            testHasFlag: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 5);
                Bridge.ClientTest.BasicCSharp.TestEnum.testHasFlag();
            },
            testIsDefined: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 6);
                Bridge.ClientTest.BasicCSharp.TestEnum.testIsDefined();
            },
            testTryParse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestEnum).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestEnum, 11);
                Bridge.ClientTest.BasicCSharp.TestEnum.testTryParse();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance)],
        statics: {
            testA: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance, 4);
                Bridge.ClientTest.BasicCSharp.TestInheritance.testA();
            },
            testB: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance, 5);
                Bridge.ClientTest.BasicCSharp.TestInheritance.testB();
            },
            testAB: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInheritance).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInheritance, 4);
                Bridge.ClientTest.BasicCSharp.TestInheritance.testAB();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces)],
        statics: {
            testInterfaceMethodAndProperty: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces, 6);
                Bridge.ClientTest.BasicCSharp.TestInterfaces.testInterfaceMethodAndProperty();
            },
            testExplicitInterfaceMethodAndProperty: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces, 3);
                Bridge.ClientTest.BasicCSharp.TestInterfaces.testExplicitInterfaceMethodAndProperty();
            },
            testTwoInterfaces: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestInterfaces).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestInterfaces, 9);
                Bridge.ClientTest.BasicCSharp.TestInterfaces.testTwoInterfaces();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestMethodParametersClass', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestMethodParametersClass, 3);
                Bridge.ClientTest.BasicCSharp.TestMethodParametersClass.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadInstanceMethods', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods)],
        statics: {
            testInstance: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadInstanceMethods, 17);
                Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods.testInstance();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadStaticMethods', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods)],
        statics: {
            testStatic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestOverloadStaticMethods, 16);
                Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods.testStatic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes)],
        statics: {
            testInstanceConstructorsAndMethods: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes, 26);
                Bridge.ClientTest.BasicCSharp.TestReferenceTypes.testInstanceConstructorsAndMethods();
            },
            testStaticConstructorsAndMethods: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes, 13);
                Bridge.ClientTest.BasicCSharp.TestReferenceTypes.testStaticConstructorsAndMethods();
            },
            testMethodParameters: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestReferenceTypes, 16);
                Bridge.ClientTest.BasicCSharp.TestReferenceTypes.testMethodParameters();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks)],
        statics: {
            simpleTryCatch: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks, 1);
                Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks.simpleTryCatch();
            },
            caughtExceptions: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks, 3);
                Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks.caughtExceptions();
            },
            thrownExceptions: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks, 12);
                Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks.thrownExceptions();
            },
            bridge320: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks, 1);
                Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks.bridge320();
            },
            bridge343: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchBlocks, 1);
                Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks.bridge343();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks)],
        statics: {
            simpleTryCatchFinally: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks, 1);
                Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks.simpleTryCatchFinally();
            },
            caughtExceptions: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks, 4);
                Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks.caughtExceptions();
            },
            thrownExceptions: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestTryCatchFinallyBlocks, 16);
                Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks.thrownExceptions();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestValueTypes)],
        statics: {
            testInstanceConstructorsAndMethods: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestValueTypes).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes, 18);
                Bridge.ClientTest.BasicCSharp.TestValueTypes.testInstanceConstructorsAndMethods();
            },
            testStaticConstructorsAndMethods: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestValueTypes).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestValueTypes, 7);
                Bridge.ClientTest.BasicCSharp.TestValueTypes.testStaticConstructorsAndMethods();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestVirtualMethods', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestVirtualMethods)],
        statics: {
            testB: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.BasicCSharp.TestVirtualMethods).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_BasicCSharp_TestVirtualMethods, 7);
                Bridge.ClientTest.BasicCSharp.TestVirtualMethods.testB();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedInsideUncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedInsideUncheckedTests.testULong();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.CheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.CheckedTests.testULong();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultComparerCanOrderNumbers: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests);
                t.getFixture().defaultComparerCanOrderNumbers();
            },
            defaultComparerCanOrderNullValues: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests);
                t.getFixture().defaultComparerCanOrderNullValues();
            },
            defaultComparerUsesCompareMethodIfClassImplementsIComparable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests);
                t.getFixture().defaultComparerUsesCompareMethodIfClassImplementsIComparable();
            },
            createWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ComparerTests);
                t.getFixture().createWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultComparerCanGetHashCodeOfNumber: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests);
                t.getFixture().defaultComparerCanGetHashCodeOfNumber();
            },
            defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests);
                t.getFixture().defaultComparerReturnsZeroAsHashCodeForNullAndUndefined();
            },
            defaultComparerCanDetermineEquality: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests);
                t.getFixture().defaultComparerCanDetermineEquality();
            },
            defaultComparerInvokesOverriddenGetHashCode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests);
                t.getFixture().defaultComparerInvokesOverriddenGetHashCode();
            },
            defaultComparerInvokesOverriddenEquals: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.EqualityComparerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_EqualityComparerTests);
                t.getFixture().defaultComparerInvokesOverriddenEquals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().defaultConstructorWorks();
            },
            capacityConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().capacityConstructorWorks();
            },
            capacityAndEqualityComparerWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().capacityAndEqualityComparerWorks();
            },
            equalityComparerOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().equalityComparerOnlyConstructorWorks();
            },
            countWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().countWorks();
            },
            keysWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().keysWorks();
            },
            valuesWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().valuesWorks();
            },
            indexerGetterWorksForExistingItems: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().indexerGetterWorksForExistingItems();
            },
            indexerSetterWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().indexerSetterWorks();
            },
            indexerGetterThrowsForNonExistingItems: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests, 0);
                t.getFixture().indexerGetterThrowsForNonExistingItems();
            },
            addWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().addWorks();
            },
            addThrowsIfItemAlreadyExists: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests, 0);
                t.getFixture().addThrowsIfItemAlreadyExists();
            },
            clearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().clearWorks();
            },
            containsKeyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().containsKeyWorks();
            },
            enumeratingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().enumeratingWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().removeWorks();
            },
            tryGetValueWithIntKeysWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().tryGetValueWithIntKeysWorks();
            },
            tryGetValueWithObjectKeysWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().tryGetValueWithObjectKeysWorks();
            },
            canUseCustomComparer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.GenericDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_GenericDictionaryTests);
                t.getFixture().canUseCustomComparer();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests)],
        statics: {
            arrayImplementsICollection: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().arrayImplementsICollection();
            },
            customClassThatShouldImplementICollectionDoesSo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().customClassThatShouldImplementICollectionDoesSo();
            },
            arrayCastToICollectionCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().arrayCastToICollectionCountWorks();
            },
            classImplementingICollectionCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionCountWorks();
            },
            classImplementingICollectionCastToICollectionCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionCastToICollectionCountWorks();
            },
            classImplementingICollectionAddWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionAddWorks();
            },
            classImplementingICollectionCastToICollectionAddWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionCastToICollectionAddWorks();
            },
            classImplementingICollectionClearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionClearWorks();
            },
            classImplementingICollectionCastToICollectionClearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionCastToICollectionClearWorks();
            },
            arrayCastToICollectionContainsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().arrayCastToICollectionContainsWorks();
            },
            classImplementingICollectionContainsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionContainsWorks();
            },
            classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionCastToICollectionContainsWorks();
            },
            classImplementingICollectionRemoveWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionRemoveWorks();
            },
            classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ICollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ICollectionTests);
                t.getFixture().classImplementingICollectionCastToICollectionRemoveWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            classImplementsInterfaces: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().classImplementsInterfaces();
            },
            countWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().countWorks();
            },
            keysWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().keysWorks();
            },
            getItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().getItemWorks();
            },
            valuesWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().valuesWorks();
            },
            containsKeyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().containsKeyWorks();
            },
            tryGetValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().tryGetValueWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().addWorks();
            },
            clearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().clearWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().removeWorks();
            },
            setItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IDictionaryTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IDictionaryTests);
                t.getFixture().setItemWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests)],
        statics: {
            arrayImplementsIEnumerable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests);
                t.getFixture().arrayImplementsIEnumerable();
            },
            customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests);
                t.getFixture().customClassThatShouldImplementIEnumerableDoesSo();
            },
            arrayGetEnumeratorMethodWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests);
                t.getFixture().arrayGetEnumeratorMethodWorks();
            },
            arrayCastToIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests);
                t.getFixture().arrayCastToIEnumerableCanBeEnumerated();
            },
            classImplementingIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests);
                t.getFixture().classImplementingIEnumerableCanBeEnumerated();
            },
            classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IEnumerableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IEnumerableTests);
                t.getFixture().classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            arrayImplementsIList: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().arrayImplementsIList();
            },
            customClassThatShouldImplementIListDoesSo: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().customClassThatShouldImplementIListDoesSo();
            },
            arrayCastToIListGetItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().arrayCastToIListGetItemWorks();
            },
            classImplementingIListGetItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListGetItemWorks();
            },
            classImplementingIListCastToIListGetItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListCastToIListGetItemWorks();
            },
            arrayCastToIListSetItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().arrayCastToIListSetItemWorks();
            },
            classImplementingIListSetItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListSetItemWorks();
            },
            classImplementingIListCastToIListSetItemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListCastToIListSetItemWorks();
            },
            arrayCastToIListIndexOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().arrayCastToIListIndexOfWorks();
            },
            classImplementingIListIndexOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListIndexOfWorks();
            },
            classImplementingIListCastToIListIndexOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListCastToIListIndexOfWorks();
            },
            classImplementingIListInsertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListInsertWorks();
            },
            classImplementingIListCastToIListInsertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListCastToIListInsertWorks();
            },
            classImplementingIListRemoveAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListRemoveAtWorks();
            },
            classImplementingIListCastToIListRemoveAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IListTests);
                t.getFixture().classImplementingIListCastToIListRemoveAtWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests)],
        statics: {
            typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
            },
            enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().enumeratingIEnumeratorIteratorToEndWorks();
            },
            prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
            },
            exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
            },
            typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
            },
            enumeratingIEnumerableIteratorToEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().enumeratingIEnumerableIteratorToEndWorks();
            },
            prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
            },
            exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
            },
            enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
            },
            differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.IteratorBlockTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_IteratorBlockTests);
                t.getFixture().differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithCapacityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().constructorWithCapacityWorks();
            },
            constructingFromArrayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().constructingFromArrayWorks();
            },
            constructingFromListWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().constructingFromListWorks();
            },
            constructingFromIEnumerableWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().constructingFromIEnumerableWorks();
            },
            countWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().countWorks();
            },
            indexingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().indexingWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().foreachWorks();
            },
            getEnumeratorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().getEnumeratorWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().addWorks();
            },
            addRangeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().addRangeWorks();
            },
            binarySearch1Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().binarySearch1Works();
            },
            binarySearch2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().binarySearch2Works();
            },
            binarySearch3Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().binarySearch3Works();
            },
            binarySearch4Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().binarySearch4Works();
            },
            clearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().clearWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().containsWorks();
            },
            containsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().containsUsesEqualsMethod();
            },
            sliceWithoutEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().sliceWithoutEndWorks();
            },
            sliceWithEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().sliceWithEndWorks();
            },
            foreachWithListItemCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().foreachWithListItemCallbackWorks();
            },
            foreachWithListCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().foreachWithListCallbackWorks();
            },
            indexOfWithoutStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().indexOfWithoutStartIndexWorks();
            },
            indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().indexOfWithoutStartIndexUsesEqualsMethod();
            },
            indexOfWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().indexOfWithStartIndexWorks();
            },
            indexOfWithStartIndexUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().indexOfWithStartIndexUsesEqualsMethod();
            },
            insertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().insertWorks();
            },
            insertRangeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().insertRangeWorks();
            },
            joinWithoutDelimiterWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().joinWithoutDelimiterWorks();
            },
            joinWithDelimiterWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().joinWithDelimiterWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().removeWorks();
            },
            removeReturnsFalseIfTheElementWasNotFound: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().removeReturnsFalseIfTheElementWasNotFound();
            },
            removeCanRemoveNullItem: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().removeCanRemoveNullItem();
            },
            removeUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().removeUsesEqualsMethod();
            },
            removeAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().removeAtWorks();
            },
            removeRangeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().removeRangeWorks();
            },
            reverseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().reverseWorks();
            },
            sortWithDefaultCompareWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().sortWithDefaultCompareWorks();
            },
            sortWithCompareCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().sortWithCompareCallbackWorks();
            },
            sortWithIComparerWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().sortWithIComparerWorks();
            },
            foreachWhenCastToIEnumerableWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().foreachWhenCastToIEnumerableWorks();
            },
            iEnumerableGetEnumeratorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iEnumerableGetEnumeratorWorks();
            },
            iCollectionCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionCountWorks();
            },
            iCollectionAddWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionAddWorks();
            },
            iCollectionClearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionClearWorks();
            },
            iCollectionContainsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionContainsWorks();
            },
            iCollectionContainsUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionContainsUsesEqualsMethod();
            },
            iCollectionRemoveWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionRemoveWorks();
            },
            iCollectionRemoveCanRemoveNullItem: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionRemoveCanRemoveNullItem();
            },
            iCollectionRemoveUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iCollectionRemoveUsesEqualsMethod();
            },
            iListIndexingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iListIndexingWorks();
            },
            iListIndexOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iListIndexOfWorks();
            },
            iListIndexOfUsesEqualsMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iListIndexOfUsesEqualsMethod();
            },
            iListInsertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iListInsertWorks();
            },
            iListRemoveAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().iListRemoveAtWorks();
            },
            toArrayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Collections.Generic.ListTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Collections_Generic_ListTests);
                t.getFixture().toArrayWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests)],
        statics: {
            roundtrip1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtrip1();
            },
            roundtrip2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtrip2();
            },
            roundtrip3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtrip3();
            },
            emptyString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.emptyString();
            },
            zeroLengthArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.zeroLengthArray();
            },
            roundtripWithPadding1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithPadding1();
            },
            roundtripWithPadding2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithPadding2();
            },
            partialRoundtripWithPadding1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.partialRoundtripWithPadding1();
            },
            partialRoundtripWithPadding2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.partialRoundtripWithPadding2();
            },
            parseWithWhitespace: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.parseWithWhitespace();
            },
            roundtripWithWhitespace2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithWhitespace2();
            },
            roundtripWithWhitespace3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithWhitespace3();
            },
            roundtripWithWhitespace4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithWhitespace4();
            },
            roundtripWithWhitespace5: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithWhitespace5();
            },
            roundtripWithWhitespace6: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithWhitespace6();
            },
            roundtripWithWhitespace7: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripWithWhitespace7();
            },
            roundtripLargeString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.roundtripLargeString();
            },
            invalidOffset: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.invalidOffset();
            },
            invalidLength: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.invalidLength();
            },
            invalidInput: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.invalidInput();
            },
            invalidCharactersInInput: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertFromBase64Tests);
                Bridge.ClientTest.ConvertTests.ConvertFromBase64Tests.invalidCharactersInInput();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests)],
        statics: {
            validOffsetIn: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.validOffsetIn();
            },
            shortInputArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.shortInputArray();
            },
            validOffsetOut: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.validOffsetOut();
            },
            invalidInputBuffer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.invalidInputBuffer();
            },
            invalidOutputBuffer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.invalidOutputBuffer();
            },
            invalidOffsetIn: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.invalidOffsetIn();
            },
            invalidOffsetOut: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.invalidOffsetOut();
            },
            invalidInputLength: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64CharArrayTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64CharArrayTests.invalidInputLength();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests)],
        statics: {
            knownByteSequence: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests.knownByteSequence();
            },
            zeroLength: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests.zeroLength();
            },
            invalidInputBuffer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests.invalidInputBuffer();
            },
            invalidOffset: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests.invalidOffset();
            },
            invalidLength: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBase64StringTests);
                Bridge.ClientTest.ConvertTests.ConvertToBase64StringTests.invalidLength();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromInt64();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromString();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromSingle();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToBooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToBooleanTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromBoolean();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToByteTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests)],
        statics: {
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromDecimal();
            },
            fromDecimalViaObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromDecimalViaObject();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromDouble();
            },
            fromDoubleViaObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromDoubleViaObject();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromSingle();
            },
            fromSingleViaObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromSingleViaObject();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToCharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToCharTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests)],
        statics: {
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromString();
            },
            fromStringWithCustomFormatProvider: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromStringWithCustomFormatProvider();
            },
            fromDateTime: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromDateTime();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromObject();
            },
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromBoolean();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromChar();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromInt64();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromUInt64();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromSingle();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromDouble();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDateTimeTests);
                t.getFixture().fromDecimal();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDecimalTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToDoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToDoubleTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt16Tests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt32Tests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToInt64Tests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSByteTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromByte();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromString();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToSingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToSingleTests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests)],
        statics: {
            fromBoxedObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromBoxedObject();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromObject();
            },
            fromDateTime: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromDateTime();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromChar();
            },
            fromByteBase2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromByteBase2();
            },
            fromByteBase8: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromByteBase8();
            },
            fromByteBase10: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromByteBase10();
            },
            fromByteBase16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromByteBase16();
            },
            fromByteInvalidBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromByteInvalidBase();
            },
            fromInt16Base2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt16Base2();
            },
            fromInt16Base8: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt16Base8();
            },
            fromInt16Base10: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt16Base10();
            },
            fromInt16Base16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt16Base16();
            },
            fromInt16InvalidBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt16InvalidBase();
            },
            fromInt32Base2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt32Base2();
            },
            fromInt32Base8: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt32Base8();
            },
            fromInt32Base10: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt32Base10();
            },
            fromInt32Base16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt32Base16();
            },
            fromInt32InvalidBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt32InvalidBase();
            },
            fromInt64Base2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt64Base2();
            },
            fromInt64Base8: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt64Base8();
            },
            fromInt64Base10: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt64Base10();
            },
            fromInt64Base16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt64Base16();
            },
            fromInt64InvalidBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt64InvalidBase();
            },
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromBoolean();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromSByte();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromByte();
            },
            fromInt16Array: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt16Array();
            },
            fromUInt16Array: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromUInt16Array();
            },
            fromInt32Array: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt32Array();
            },
            fromUInt32Array: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromUInt32Array();
            },
            fromInt64Array: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromInt64Array();
            },
            fromUInt64Array: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromUInt64Array();
            },
            fromSingleArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromSingleArray();
            },
            fromDoubleArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromDoubleArray();
            },
            fromDecimalArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromDecimalArray();
            },
            fromDateTimeArray: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromDateTimeArray();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromString();
            },
            fromIFormattable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromIFormattable();
            },
            fromNonIConvertible: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToStringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToStringTests);
                Bridge.ClientTest.ConvertTests.ConvertToStringTests.fromNonIConvertible();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt16Tests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt32Tests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests)],
        statics: {
            fromBoolean: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromBoolean();
            },
            fromByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromByte();
            },
            fromChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromChar();
            },
            fromDecimal: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromDecimal();
            },
            fromDouble: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromDouble();
            },
            fromInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromInt16();
            },
            fromInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromInt32();
            },
            fromInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromInt64();
            },
            fromObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromObject();
            },
            fromSByte: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromSByte();
            },
            fromSingle: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromSingle();
            },
            fromString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromString();
            },
            fromStringWithBase: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromStringWithBase();
            },
            fromUInt16: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromUInt16();
            },
            fromUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromUInt32();
            },
            fromUInt64: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.ConvertTests.ConvertToUInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_ConvertTests_ConvertToUInt64Tests);
                t.getFixture().fromUInt64();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestAutoProps', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestAutoProps)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestAutoProps).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestAutoProps);
                Bridge.ClientTest.CSharp6.TestAutoProps.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestAwaitInCatchFinally', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestAwaitInCatchFinally)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestAwaitInCatchFinally).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestAwaitInCatchFinally);
                Bridge.ClientTest.CSharp6.TestAwaitInCatchFinally.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestConditionAccess', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestConditionAccess)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestConditionAccess).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestConditionAccess);
                Bridge.ClientTest.CSharp6.TestConditionAccess.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExceptionFilter', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestExceptionFilter)],
        statics: {
            testFalseFilter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestExceptionFilter).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExceptionFilter);
                Bridge.ClientTest.CSharp6.TestExceptionFilter.testFalseFilter();
            },
            testTrueFilter: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestExceptionFilter).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExceptionFilter);
                Bridge.ClientTest.CSharp6.TestExceptionFilter.testTrueFilter();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExpressionBodyFunction', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestExpressionBodyFunction)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestExpressionBodyFunction).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestExpressionBodyFunction);
                Bridge.ClientTest.CSharp6.TestExpressionBodyFunction.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestIndexInitializer', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestIndexInitializer)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestIndexInitializer).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestIndexInitializer);
                Bridge.ClientTest.CSharp6.TestIndexInitializer.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestInterpolatedStrings', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestInterpolatedStrings)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestInterpolatedStrings).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestInterpolatedStrings);
                Bridge.ClientTest.CSharp6.TestInterpolatedStrings.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestNameOf', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestNameOf)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestNameOf).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestNameOf);
                Bridge.ClientTest.CSharp6.TestNameOf.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestUsingStatic', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestUsingStatic)],
        statics: {
            testBasic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CSharp6.TestUsingStatic).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CSharp6_TestUsingStatic);
                Bridge.ClientTest.CSharp6.TestUsingStatic.testBasic();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests);
                t.getFixture().getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CultureInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_CultureInfoTests);
                t.getFixture().invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests)],
        statics: {
            testSubtractOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testSubtractOperator();
            },
            testRemainderOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testRemainderOperator();
            },
            testMultiplyOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testMultiplyOperator();
            },
            testDivideOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testDivideOperator();
            },
            testAddOperator: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testAddOperator();
            },
            testAddMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testAddMethod();
            },
            testDivideMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testDivideMethod();
            },
            testMultiplyMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testMultiplyMethod();
            },
            testRemainderMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testRemainderMethod();
            },
            testSubtractMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testSubtractMethod();
            },
            testCeilingMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testCeilingMethod();
            },
            testFloorMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.DecimalMathTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_DecimalMathTests);
                Bridge.ClientTest.DecimalMathTests.testFloorMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests)],
        statics: {
            assume: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().assume();
            },
            assumeWithUserMessage: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().assumeWithUserMessage();
            },
            _Assert: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture()._Assert();
            },
            assertWithUserMessage: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().assertWithUserMessage();
            },
            requires: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().requires();
            },
            requiresWithUserMessage: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().requiresWithUserMessage();
            },
            requiresWithTypeException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().requiresWithTypeException();
            },
            requiredWithTypeExceptionAndUserMessage: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().requiredWithTypeExceptionAndUserMessage();
            },
            forAll: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().forAll();
            },
            forAllWithCollection: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().forAllWithCollection();
            },
            exists: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().exists();
            },
            existsWithCollection: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.Contracts.ContractTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_Contracts_ContractTests);
                t.getFixture().existsWithCollection();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests)],
        statics: {
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests);
                t.getFixture().defaultConstructorWorks();
            },
            constantsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests);
                t.getFixture().constantsWorks();
            },
            startNewWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests);
                t.getFixture().startNewWorks();
            },
            startAndStopWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests);
                t.getFixture().startAndStopWork();
            },
            elapsedWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests);
                t.getFixture().elapsedWorks();
            },
            getTimestampWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Diagnostics.StopwatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Diagnostics_StopwatchTests);
                t.getFixture().getTimestampWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_EnvironmentTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.EnvironmentTests)],
        statics: {
            newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.EnvironmentTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_EnvironmentTests);
                t.getFixture().newLineIsAStringContainingOnlyTheNewLineChar();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithIEnumerableInnerExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().constructorWithIEnumerableInnerExceptionsWorks();
            },
            constructorWithInnerExceptionArrayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().constructorWithInnerExceptionArrayWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndIEnumerableInnerExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().constructorWithMessageAndIEnumerableInnerExceptionsWorks();
            },
            constructorWithMessageAndInnerExceptionArrayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionArrayWorks();
            },
            flattenWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.AggregateExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_AggregateExceptionTests);
                t.getFixture().flattenWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithMessageAndParamNameWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests);
                t.getFixture().constructorWithMessageAndParamNameWorks();
            },
            constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentExceptionTests);
                t.getFixture().constructorWithMessageAndParamNameAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithParamNameWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests);
                t.getFixture().constructorWithParamNameWorks();
            },
            constructorWithParamNameAndMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests);
                t.getFixture().constructorWithParamNameAndMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentNullExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithParamNameWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests);
                t.getFixture().constructorWithParamNameWorks();
            },
            constructorWithParamNameAndMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests);
                t.getFixture().constructorWithParamNameAndMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests);
                t.getFixture().constructorWithParamNameAndActualValueAndMessageWorks();
            },
            rangeErrorIsConvertedToArgumentOutOfRangeException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArgumentOutOfRangeExceptionTests, 1);
                t.getFixture().rangeErrorIsConvertedToArgumentOutOfRangeException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ArithmeticExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ArithmeticExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CommonExceptionTests)],
        statics: {
            throwingAndCatchingExceptionsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CommonExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests);
                t.getFixture().throwingAndCatchingExceptionsWorks();
            },
            exceptionOfWrongTypeIsNotCaught: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CommonExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests);
                t.getFixture().exceptionOfWrongTypeIsNotCaught();
            },
            canCatchExceptionAsBaseType: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CommonExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests);
                t.getFixture().canCatchExceptionAsBaseType();
            },
            canCatchStringAsException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CommonExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests);
                t.getFixture().canCatchStringAsException();
            },
            canCatchStringAsCatchAll: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CommonExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CommonExceptionTests, 1);
                t.getFixture().canCatchStringAsCatchAll();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithMessageAndParamNameWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithMessageAndParamNameWorks();
            },
            constructorWithMessageAndCultureNameAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithMessageAndCultureNameAndInnerExceptionWorks();
            },
            constructorWithParamNameAndCultureNameAndMessage: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithParamNameAndCultureNameAndMessage();
            },
            constructorWithMessageAndCultureIdAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithMessageAndCultureIdAndInnerExceptionWorks();
            },
            constructorWithParamNameAndCultureIdAndMessage: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.CultureNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_CultureNotFoundExceptionTests);
                t.getFixture().constructorWithParamNameAndCultureIdAndMessage();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_DivideByZeroExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            },
            messagePropertyCanBeOverridden: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests);
                t.getFixture().messagePropertyCanBeOverridden();
            },
            innerExceptionPropertyCanBeOverridden: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.ExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_ExceptionTests);
                t.getFixture().innerExceptionPropertyCanBeOverridden();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.FormatExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_FormatExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.IndexOutOfRangeExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.IndexOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.IndexOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.IndexOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.IndexOutOfRangeExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_IndexOutOfRangeExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidCastExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidCastExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_InvalidOperationExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_KeyNotFoundExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotImplementedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotImplementedExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NotSupportedExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NotSupportedExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            },
            accessingAFieldOnANullObjectCausesANullReferenceException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.NullReferenceExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_NullReferenceExceptionTests, 1);
                t.getFixture().accessingAFieldOnANullObjectCausesANullReferenceException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            cancellationTokenOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().cancellationTokenOnlyConstructorWorks();
            },
            messageOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().messageOnlyConstructorWorks();
            },
            messageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().messageAndInnerExceptionConstructorWorks();
            },
            messageAndCancellationTokenConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().messageAndCancellationTokenConstructorWorks();
            },
            messageAndInnerExceptionAndCancellationTokenConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OperationCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OperationCanceledExceptionTests);
                t.getFixture().messageAndInnerExceptionAndCancellationTokenConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OutOfMemoryExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OutOfMemoryExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.OverflowExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_OverflowExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            argumentsOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests);
                t.getFixture().argumentsOnlyConstructorWorks();
            },
            argumentsAndMessageConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests);
                t.getFixture().argumentsAndMessageConstructorWorks();
            },
            argumentsAndMessageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.PromiseExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_PromiseExceptionTests);
                t.getFixture().argumentsAndMessageAndInnerExceptionConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RankExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RankExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RegexMatchTimeoutExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RegexMatchTimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RegexMatchTimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RegexMatchTimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RegexMatchTimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            },
            constructorWithExceptionDetailsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.RegexMatchTimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_RegexMatchTimeoutExceptionTests);
                t.getFixture().constructorWithExceptionDetailsWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.SystemExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_SystemExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            messageOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests);
                t.getFixture().messageOnlyConstructorWorks();
            },
            taskOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests);
                t.getFixture().taskOnlyConstructorWorks();
            },
            messageAndInnerExceptionConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TaskCanceledExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TaskCanceledExceptionTests);
                t.getFixture().messageAndInnerExceptionConstructorWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TimeoutExceptionTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithMessageWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests);
                t.getFixture().constructorWithMessageWorks();
            },
            constructorWithMessageAndInnerExceptionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Exceptions.TimeoutExceptionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Exceptions_TimeoutExceptionTests);
                t.getFixture().constructorWithMessageAndInnerExceptionWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.DateTimeFormatInfoTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.DateTimeFormatInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.DateTimeFormatInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests);
                t.getFixture().getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.DateTimeFormatInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_DateTimeFormatInfoTests);
                t.getFixture().invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatInfoTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            getFormatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests);
                t.getFixture().getFormatWorks();
            },
            invariantWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatInfoTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatInfoTests);
                t.getFixture().invariantWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests)],
        statics: {
            currencyFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().currencyFormatSpecifierWorks();
            },
            decimalFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().decimalFormatSpecifierWorks();
            },
            exponentialFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().exponentialFormatSpecifierWorks();
            },
            fixedPointFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().fixedPointFormatSpecifierWorks();
            },
            generalFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().generalFormatSpecifierWorks();
            },
            numericFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().numericFormatSpecifierWorks();
            },
            percentFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().percentFormatSpecifierWorks();
            },
            roundTripFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().roundTripFormatSpecifierWorks();
            },
            hexadecimalFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().hexadecimalFormatSpecifierWorks();
            },
            customZeroFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customZeroFormatSpecifierWorks();
            },
            customHashFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customHashFormatSpecifierWorks();
            },
            customDotFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customDotFormatSpecifierWorks();
            },
            customCommaFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customCommaFormatSpecifierWorks();
            },
            customPercentFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customPercentFormatSpecifierWorks();
            },
            customPerMileFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customPerMileFormatSpecifierWorks();
            },
            customEscapeFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customEscapeFormatSpecifierWorks();
            },
            customSemicolonFormatSpecifierWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.NumberFormatSpecifiersTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_NumberFormatSpecifiersTests);
                t.getFixture().customSemicolonFormatSpecifierWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests)],
        statics: {
            simple: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().simple();
            },
            valueFormating: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().valueFormating();
            },
            spaceControlling: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().spaceControlling();
            },
            aligment: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().aligment();
            },
            padIntegerWithLeadingZeros: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().padIntegerWithLeadingZeros();
            },
            padIntegerWithSpecificNumberLeadingZeros: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().padIntegerWithSpecificNumberLeadingZeros();
            },
            padNumericWithLeadingZerosToLength: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().padNumericWithLeadingZerosToLength();
            },
            padNumericWithSpecificNumberOfLeadingZeros: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Format.StringFormatTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Format_StringFormatTests);
                t.getFixture().padNumericWithSpecificNumberOfLeadingZeros();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().defaultValueWorks();
            },
            createInstanceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().createInstanceWorks();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().defaultConstructorWorks();
            },
            emptyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().emptyWorks();
            },
            toStringWithoutArgumentsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().toStringWithoutArgumentsWorks();
            },
            byteArrayConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().byteArrayConstructorWorks();
            },
            int32Int16Int16ByteArrayConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().int32Int16Int16ByteArrayConstructorWorks();
            },
            int32Int16Int16BytesConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().int32Int16Int16BytesConstructorWorks();
            },
            uInt32UInt16UInt16BytesConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().uInt32UInt16UInt16BytesConstructorWorks();
            },
            stringConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().stringConstructorWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().parseWorks();
            },
            parseExactWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().parseExactWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().tryParseWorks();
            },
            tryParseExactWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().tryParseExactWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().iComparableCompareToWorks();
            },
            equalsObjectWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().equalsObjectWorks();
            },
            equalsGuidWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().equalsGuidWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().getHashCodeWorks();
            },
            equalityOperatorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().equalityOperatorWorks();
            },
            inequalityOperatorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().inequalityOperatorWorks();
            },
            toStringWithFormatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().toStringWithFormatWorks();
            },
            newGuidWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().newGuidWorks();
            },
            toByteArrayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.GuidTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_GuidTests);
                t.getFixture().toByteArrayWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IComparableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.IComparableTests)],
        statics: {
            callingMethodThroughIComparableInterfaceInvokesImplementingMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.IComparableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IComparableTests);
                t.getFixture().callingMethodThroughIComparableInterfaceInvokesImplementingMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IEquatableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.IEquatableTests)],
        statics: {
            callingMethodThroughIComparableInterfaceInvokesImplementingMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.IEquatableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_IEquatableTests);
                t.getFixture().callingMethodThroughIComparableInterfaceInvokesImplementingMethod();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqAggregateOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqAggregateOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators, 20);
                Bridge.ClientTest.Linq.TestLinqAggregateOperators.test();
            },
            bridge315: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqAggregateOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqAggregateOperators, 1);
                Bridge.ClientTest.Linq.TestLinqAggregateOperators.bridge315();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqConversionOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqConversionOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqConversionOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqConversionOperators, 13);
                Bridge.ClientTest.Linq.TestLinqConversionOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqElementOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqElementOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqElementOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqElementOperators, 26);
                Bridge.ClientTest.Linq.TestLinqElementOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGenerationOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGenerationOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGenerationOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGenerationOperators, 2);
                Bridge.ClientTest.Linq.TestLinqGenerationOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators, 3);
                Bridge.ClientTest.Linq.TestLinqGroupingOperators.test();
            },
            testComplexGrouping: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators, 1);
                Bridge.ClientTest.Linq.TestLinqGroupingOperators.testComplexGrouping();
            },
            testAnagrams: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqGroupingOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqGroupingOperators, 2);
                Bridge.ClientTest.Linq.TestLinqGroupingOperators.testAnagrams();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqJoinOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqJoinOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqJoinOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqJoinOperators, 5);
                Bridge.ClientTest.Linq.TestLinqJoinOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqMiscellaneousOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqMiscellaneousOperators, 4);
                Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqOrderingOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqOrderingOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqOrderingOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqOrderingOperators, 8);
                Bridge.ClientTest.Linq.TestLinqOrderingOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqPartitioningOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqPartitioningOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqPartitioningOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqPartitioningOperators, 8);
                Bridge.ClientTest.Linq.TestLinqPartitioningOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqProjectionOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqProjectionOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqProjectionOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqProjectionOperators, 8);
                Bridge.ClientTest.Linq.TestLinqProjectionOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQuantifiers', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQuantifiers)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQuantifiers).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQuantifiers, 4);
                Bridge.ClientTest.Linq.TestLinqQuantifiers.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQueryExecution', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQueryExecution)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqQueryExecution).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqQueryExecution, 6);
                Bridge.ClientTest.Linq.TestLinqQueryExecution.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqRestrictionOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqRestrictionOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqRestrictionOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqRestrictionOperators, 5);
                Bridge.ClientTest.Linq.TestLinqRestrictionOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqSetOperators', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqSetOperators)],
        statics: {
            test: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Linq.TestLinqSetOperators).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Linq_TestLinqSetOperators, 8);
                Bridge.ClientTest.Linq.TestLinqSetOperators.test();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests)],
        statics: {
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().constantsWork();
            },
            absOfDoubleWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfDoubleWorks();
            },
            absOfIntWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfIntWorks();
            },
            absOfLongWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfLongWorks();
            },
            absOfSbyteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfSbyteWorks();
            },
            absOfShortWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfShortWorks();
            },
            absOfFloatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfFloatWorks();
            },
            absOfDecimalWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().absOfDecimalWorks();
            },
            acosWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().acosWorks();
            },
            asinWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().asinWorks();
            },
            atanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().atanWorks();
            },
            atan2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().atan2Works();
            },
            cosWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().cosWorks();
            },
            divRemWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().divRemWorks();
            },
            expWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().expWorks();
            },
            floorOfDoubleWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().floorOfDoubleWorks();
            },
            floorOfDecimalWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().floorOfDecimalWorks();
            },
            logWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().logWorks();
            },
            maxOfByteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfByteWorks();
            },
            maxOfDecimalWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfDecimalWorks();
            },
            maxOfDoubleWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfDoubleWorks();
            },
            maxOfShortWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfShortWorks();
            },
            maxOfIntWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfIntWorks();
            },
            maxOfLongWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfLongWorks();
            },
            maxOfSByteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfSByteWorks();
            },
            maxOfFloatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfFloatWorks();
            },
            maxOfUShortWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfUShortWorks();
            },
            maxOfUIntWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfUIntWorks();
            },
            maxOfULongWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().maxOfULongWorks();
            },
            minOfByteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfByteWorks();
            },
            minOfDecimalWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfDecimalWorks();
            },
            minOfDoubleWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfDoubleWorks();
            },
            minOfShortWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfShortWorks();
            },
            minOfIntWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfIntWorks();
            },
            minOfLongWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfLongWorks();
            },
            minOfSByteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfSByteWorks();
            },
            minOfFloatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfFloatWorks();
            },
            minOfUShortWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfUShortWorks();
            },
            minOfUIntWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfUIntWorks();
            },
            minOfULongWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().minOfULongWorks();
            },
            powWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().powWorks();
            },
            randomWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().randomWorks();
            },
            roundOfDoubleWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().roundOfDoubleWorks();
            },
            roundDecimalWithModeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().roundDecimalWithModeWorks();
            },
            roundDecimalWithPrecisionAndModeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().roundDecimalWithPrecisionAndModeWorks();
            },
            roundDoubleWithModeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().roundDoubleWithModeWorks();
            },
            roundDoubleWithPrecisionAndModeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().roundDoubleWithPrecisionAndModeWorks();
            },
            jsRoundWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().jsRoundWorks();
            },
            iEEERemainderWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().iEEERemainderWorks();
            },
            sinWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().sinWorks();
            },
            sqrtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().sqrtWorks();
            },
            tanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MathTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MathTests);
                t.getFixture().tanWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            lengthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().lengthWorks();
            },
            getValueWorksForUninitializedElement: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getValueWorksForUninitializedElement();
            },
            getValueByIndexWorksForUninitializedElement: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getValueByIndexWorksForUninitializedElement();
            },
            settingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().settingValueByIndexWorks();
            },
            setValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().setValueWorks();
            },
            getValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getValueWorks();
            },
            gettingValueByIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().gettingValueByIndexWorks();
            },
            getLengthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getLengthWorks();
            },
            getLowerBoundWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getLowerBoundWorks();
            },
            getUpperBoundWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getUpperBoundWorks();
            },
            foreachWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().foreachWorks();
            },
            rankWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().rankWorks();
            },
            getValueWithIndexOutOfRangeThrowsAnException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().getValueWithIndexOutOfRangeThrowsAnException();
            },
            setValueWithIndexOutOfRangeThrowsAnException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.MultidimArrayTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_MultidimArrayTests);
                t.getFixture().setValueWithIndexOutOfRangeThrowsAnException();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            convertingToNullableWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().convertingToNullableWorks();
            },
            hasValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().hasValueWorks();
            },
            boxingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().boxingWorks();
            },
            unboxingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().unboxingWorks();
            },
            valueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().valueWorks();
            },
            unboxingValueOfWrongTypeThrowsAnException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().unboxingValueOfWrongTypeThrowsAnException();
            },
            getValueOrDefaultWithArgWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().getValueOrDefaultWithArgWorks();
            },
            liftedEqualityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedEqualityWorks();
            },
            liftedInequalityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedInequalityWorks();
            },
            liftedLessThanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedLessThanWorks();
            },
            liftedGreaterThanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedGreaterThanWorks();
            },
            liftedLessThanOrEqualWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedLessThanOrEqualWorks();
            },
            liftedGreaterThanOrEqualWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedGreaterThanOrEqualWorks();
            },
            liftedSubtractionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedSubtractionWorks();
            },
            liftedAdditionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedAdditionWorks();
            },
            liftedModWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedModWorks();
            },
            liftedFloatingPointDivisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedFloatingPointDivisionWorks();
            },
            liftedIntegerDivisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedIntegerDivisionWorks();
            },
            liftedMultiplicationWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedMultiplicationWorks();
            },
            liftedBitwiseAndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedBitwiseAndWorks();
            },
            liftedBitwiseOrWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedBitwiseOrWorks();
            },
            liftedBitwiseXorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedBitwiseXorWorks();
            },
            liftedLeftShiftWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedLeftShiftWorks();
            },
            liftedSignedRightShiftWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedSignedRightShiftWorks();
            },
            liftedUnsignedRightShiftWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedUnsignedRightShiftWorks();
            },
            liftedBooleanAndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedBooleanAndWorks();
            },
            liftedBooleanOrWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedBooleanOrWorks();
            },
            liftedBooleanNotWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedBooleanNotWorks();
            },
            liftedNegationWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedNegationWorks();
            },
            liftedUnaryPlusWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedUnaryPlusWorks();
            },
            liftedOnesComplementWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().liftedOnesComplementWorks();
            },
            coalesceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.NullableTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_NullableTests);
                t.getFixture().coalesceWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests)],
        statics: {
            accessorsCanBeInvokedInstance: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests);
                t.getFixture().accessorsCanBeInvokedInstance();
            },
            accessorsCanBeInvokedStatic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests);
                t.getFixture().accessorsCanBeInvokedStatic();
            },
            accessorsCanBeInvokedGeneric: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests);
                t.getFixture().accessorsCanBeInvokedGeneric();
            },
            accessorsCanBeInvokedGenericStatic: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests);
                t.getFixture().accessorsCanBeInvokedGenericStatic();
            },
            baseAccessorsCanBeInvoked: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests);
                t.getFixture().baseAccessorsCanBeInvoked();
            },
            baseAccessorsCanBeInvokedGeneric: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.PropertyAccessorTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_PropertyAccessorTests);
                t.getFixture().baseAccessorsCanBeInvokedGeneric();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.RandomTests)],
        statics: {
            unseeded: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.RandomTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests);
                Bridge.ClientTest.RandomTests.unseeded();
            },
            seeded: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.RandomTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests);
                Bridge.ClientTest.RandomTests.seeded();
            },
            sample: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.RandomTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_RandomTests);
                Bridge.ClientTest.RandomTests.sample();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultValueIsFalse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().defaultValueIsFalse();
            },
            creatingInstanceReturnsFalse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().creatingInstanceReturnsFalse();
            },
            defaultConstructorReturnsFalse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().defaultConstructorReturnsFalse();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().objectEqualsWorks();
            },
            boolEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().boolEqualsWorks();
            },
            logicalExclusiveOrWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().logicalExclusiveOrWorks();
            },
            logicalAndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().logicalAndWorks();
            },
            logicalNegationWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().logicalNegationWorks();
            },
            conditionalOperatorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().conditionalOperatorWorks();
            },
            conditionalAndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().conditionalAndWorks();
            },
            conditionalOrWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().conditionalOrWorks();
            },
            equalityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().equalityWorks();
            },
            inequalityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().inequalityWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().iComparableCompareToWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().parseWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().tryParseWorks();
            },
            boolStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.BooleanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_BooleanTests);
                t.getFixture().boolStringWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ByteTests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests)],
        statics: {
            typePropertiesAreInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().typePropertiesAreInt32();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().castsWork();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().defaultValueWorks();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().constantsWork();
            },
            charComparisonWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().charComparisonWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().parseWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().toStringWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().compareToWorks();
            },
            isLowerWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().isLowerWorks();
            },
            isUpperWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().isUpperWorks();
            },
            toLowerWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().toLowerWorks();
            },
            toUpperWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().toUpperWorks();
            },
            isDigitWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().isDigitWorks();
            },
            isWhiteSpaceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().isWhiteSpaceWorks();
            },
            isDigitWithStringAndIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().isDigitWithStringAndIndexWorks();
            },
            isWhiteSpaceWithStringAndIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.CharTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_CharTests);
                t.getFixture().isWhiteSpaceWithStringAndIndexWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().defaultValueIs0();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            convertingConstructorsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().convertingConstructorsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().iFormattableToStringWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            addWithStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().addWithStringWorks();
            },
            conversionsToDecimalWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().conversionsToDecimalWork();
            },
            conversionsFromDecimalWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().conversionsFromDecimalWork();
            },
            operatorsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().operatorsWork();
            },
            addWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().addWorks();
            },
            ceilingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().ceilingWorks();
            },
            divideWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().divideWorks();
            },
            floorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().floorWorks();
            },
            remainderWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().remainderWorks();
            },
            multiplyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().multiplyWorks();
            },
            negateWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().negateWorks();
            },
            roundWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().roundWorks();
            },
            roundWithModeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().roundWithModeWorks();
            },
            subtractWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().subtractWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().objectEqualsWorks();
            },
            decimalEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().decimalEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().iComparableCompareToWorks();
            },
            fullCoalesceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().fullCoalesceWorks();
            },
            shortCoalesceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DecimalTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DecimalTests);
                t.getFixture().shortCoalesceWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().defaultValueIs0();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toStringWorks();
            },
            toExponentialWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toExponentialWorks();
            },
            toExponentialWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toExponentialWithFractionalDigitsWorks();
            },
            toFixed: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toFixed();
            },
            toFixedWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toFixedWithFractionalDigitsWorks();
            },
            toPrecisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toPrecisionWorks();
            },
            toPrecisionWithPrecisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().toPrecisionWithPrecisionWorks();
            },
            isPositiveInfinityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().isPositiveInfinityWorks();
            },
            isNegativeInfinityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().isNegativeInfinityWorks();
            },
            isInfinityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().isInfinityWorks();
            },
            isFiniteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().isFiniteWorks();
            },
            isNaNWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().isNaNWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().getHashCodeWorks();
            },
            objectEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().objectEqualsWorks();
            },
            doubleEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().doubleEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.DoubleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_DoubleTests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            firstValueOfEnumIsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests);
                t.getFixture().firstValueOfEnumIsZero();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.EnumTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_EnumTests);
                t.getFixture().equalsWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int16Tests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().castsWork();
            },
            typeIsWorksForInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().typeIsWorksForInt32();
            },
            typeAsWorksForInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().typeAsWorksForInt32();
            },
            unboxingWorksForInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().unboxingWorksForInt32();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().iComparableCompareToWorks();
            },
            integerDivisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().integerDivisionWorks();
            },
            integerModuloWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().integerModuloWorks();
            },
            integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().integerDivisionByZeroThrowsDivideByZeroException();
            },
            doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int32Tests);
                t.getFixture().doublesAreTruncatedWhenConvertedToIntegers();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().typePropertiesAreCorrect();
            },
            minMaxValuesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().minMaxValuesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().castsWork();
            },
            overflowWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().overflowWorks();
            },
            combinedTypesOperationsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().combinedTypesOperationsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().parseWorks();
            },
            castingOfLargeDoublesToInt64Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().castingOfLargeDoublesToInt64Works();
            },
            divisionOfLargeInt64Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().divisionOfLargeInt64Works();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().iComparableCompareToWorks();
            },
            shiftWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.Int64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_Int64Tests);
                t.getFixture().shiftWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorReturnsTodaysDate: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().defaultConstructorReturnsTodaysDate();
            },
            creatingInstanceReturnsDateZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().creatingInstanceReturnsDateZero();
            },
            millisecondSinceEpochConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().millisecondSinceEpochConstructorWorks();
            },
            stringConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().stringConstructorWorks();
            },
            yMDConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().yMDConstructorWorks();
            },
            yMDHConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().yMDHConstructorWorks();
            },
            yMDHNConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().yMDHNConstructorWorks();
            },
            yMDHNSConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().yMDHNSConstructorWorks();
            },
            yMDHNSUConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().yMDHNSUConstructorWorks();
            },
            nowWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().nowWorks();
            },
            uTCNowWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().uTCNowWorks();
            },
            toUniversalWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toUniversalWorks();
            },
            toLocalWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toLocalWorks();
            },
            todayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().todayWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().formatWorks();
            },
            localeFormatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().localeFormatWorks();
            },
            getFullYearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getFullYearWorks();
            },
            getMonthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getMonthWorks();
            },
            getDateWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getDateWorks();
            },
            getHoursWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getHoursWorks();
            },
            getMinutesWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getMinutesWorks();
            },
            getSecondsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getSecondsWorks();
            },
            getMillisecondsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getMillisecondsWorks();
            },
            getDayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getDayWorks();
            },
            getTimeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getTimeWorks();
            },
            valueOfWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().valueOfWorks();
            },
            getTimezoneOffsetWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getTimezoneOffsetWorks();
            },
            getUTCFullYearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCFullYearWorks();
            },
            getUtcMonthWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUtcMonthWorks();
            },
            getUTCDateWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCDateWorks();
            },
            getUTCHoursWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCHoursWorks();
            },
            getUTCMinutesWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCMinutesWorks();
            },
            getUTCSecondsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCSecondsWorks();
            },
            getUTCMillisecondsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCMillisecondsWorks();
            },
            getUTCDayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getUTCDayWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().parseWorks();
            },
            parseExactWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().parseExactWorks();
            },
            parseExactWithCultureWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().parseExactWithCultureWorks();
            },
            parseExactUTCWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().parseExactUTCWorks();
            },
            parseExactUTCWithCultureWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().parseExactUTCWithCultureWorks();
            },
            toDateStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toDateStringWorks();
            },
            toTimeStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toTimeStringWorks();
            },
            toUTCStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toUTCStringWorks();
            },
            toLocaleDateStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toLocaleDateStringWorks();
            },
            toLocaleTimeStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().toLocaleTimeStringWorks();
            },
            subtractingDatesWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().subtractingDatesWorks();
            },
            subtractMethodReturningTimeSpanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().subtractMethodReturningTimeSpanWorks();
            },
            dateEqualityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateEqualityWorks();
            },
            dateInequalityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateInequalityWorks();
            },
            dateLessThanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateLessThanWorks();
            },
            dateLessEqualWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateLessEqualWorks();
            },
            dateGreaterThanWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateGreaterThanWorks();
            },
            dateGreaterEqualWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateGreaterEqualWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().equalsWorks();
            },
            dateTimeEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().dateTimeEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests);
                t.getFixture().compareToWorks();
            },
            dateTimes: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_JsDateTimeTests, 1);
                Bridge.ClientTest.SimpleTypes.JsDateTimeTests.dateTimes();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            canGetHashCodeForObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().canGetHashCodeForObject();
            },
            repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().repeatedCallsToGetHashCodeReturnsSameValue();
            },
            objectIsEqualToItself: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().objectIsEqualToItself();
            },
            objectIsNotEqualToOtherObject: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().objectIsNotEqualToOtherObject();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().staticEqualsWorks();
            },
            referenceEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().referenceEqualsWorks();
            },
            toStringOverride: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.ObjectTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_ObjectTests);
                t.getFixture().toStringOverride();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SByteTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SByteTests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().defaultValueIs0();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().constantsWork();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().iFormattableToStringWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toStringWorks();
            },
            toExponentialWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toExponentialWorks();
            },
            toExponentialWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toExponentialWithFractionalDigitsWorks();
            },
            toFixed: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toFixed();
            },
            toFixedWithFractionalDigitsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toFixedWithFractionalDigitsWorks();
            },
            toPrecisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toPrecisionWorks();
            },
            toPrecisionWithPrecisionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().toPrecisionWithPrecisionWorks();
            },
            isPositiveInfinityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().isPositiveInfinityWorks();
            },
            isNegativeInfinityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().isNegativeInfinityWorks();
            },
            isInfinityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().isInfinityWorks();
            },
            isFiniteWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().isFiniteWorks();
            },
            isNaNWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().isNaNWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.SingleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_SingleTests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            stringInterfaces: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().stringInterfaces();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().defaultConstructorWorks();
            },
            copyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().copyConstructorWorks();
            },
            charAndCountConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().charAndCountConstructorWorks();
            },
            charArrayConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().charArrayConstructorWorks();
            },
            emptyFieldWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().emptyFieldWorks();
            },
            lengthPropertyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lengthPropertyWorks();
            },
            charAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().charAtWorks();
            },
            charCodeAtWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().charCodeAtWorks();
            },
            compareWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().compareWorks();
            },
            compareWithIgnoreCaseArgWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().compareWithIgnoreCaseArgWorks();
            },
            concatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().concatWorks();
            },
            concatWithObjectsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().concatWithObjectsWorks();
            },
            endsWithCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().endsWithCharWorks();
            },
            endsWithStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().endsWithStringWorks();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().staticEqualsWorks();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().formatWorks();
            },
            formatWorksExtended: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().formatWorksExtended();
            },
            formatWorksWithIFormattable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().formatWorksWithIFormattable();
            },
            formatCanUseEscapedBraces: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().formatCanUseEscapedBraces();
            },
            fromCharCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().fromCharCodeWorks();
            },
            indexOfCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfCharWorks();
            },
            indexOfStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfStringWorks();
            },
            indexOfCharWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfCharWithStartIndexWorks();
            },
            indexOfCharWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfCharWithStartIndexAndCountWorks();
            },
            indexOfStringWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfStringWithStartIndexWorks();
            },
            indexOfStringWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfStringWithStartIndexAndCountWorks();
            },
            indexOfAnyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfAnyWorks();
            },
            indexOfAnyWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfAnyWithStartIndexWorks();
            },
            indexOfAnyWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().indexOfAnyWithStartIndexAndCountWorks();
            },
            insertWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().insertWorks();
            },
            isNullOrEmptyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().isNullOrEmptyWorks();
            },
            lastIndexOfCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfCharWorks();
            },
            lastIndexOfStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfStringWorks();
            },
            lastIndexOfCharWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfCharWithStartIndexWorks();
            },
            lastIndexOfStringWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfStringWithStartIndexWorks();
            },
            lastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfCharWithStartIndexAndCountWorks();
            },
            lastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfStringWithStartIndexAndCountWorks();
            },
            lastIndexOfAnyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfAnyWorks();
            },
            lastIndexOfAnyWithStartIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfAnyWithStartIndexWorks();
            },
            lastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().lastIndexOfAnyWithStartIndexAndCountWorks();
            },
            localeCompareWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().localeCompareWorks();
            },
            matchWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().matchWorks();
            },
            padLeftWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().padLeftWorks();
            },
            padLeftWithCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().padLeftWithCharWorks();
            },
            padRightWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().padRightWorks();
            },
            padRightWithCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().padRightWithCharWorks();
            },
            removeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().removeWorks();
            },
            removeWithCountWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().removeWithCountWorks();
            },
            replaceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().replaceWorks();
            },
            replaceCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().replaceCharWorks();
            },
            replaceRegexWithReplaceTextWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().replaceRegexWithReplaceTextWorks();
            },
            replaceRegexWithReplaceCallbackWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().replaceRegexWithReplaceCallbackWorks();
            },
            searchWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().searchWorks();
            },
            sliceWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().sliceWorks();
            },
            splitWithStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithStringWorks();
            },
            splitWithCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithCharWorks();
            },
            jsSplitWithStringAndLimitWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().jsSplitWithStringAndLimitWorks();
            },
            jsSplitWithCharAndLimitWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().jsSplitWithCharAndLimitWorks();
            },
            splitWithCharsAndLimitWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithCharsAndLimitWorks();
            },
            splitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithCharsAndStringSplitOptionsAndLimitWorks();
            },
            splitWithRegexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithRegexWorks();
            },
            someNetSplitTests: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().someNetSplitTests();
            },
            splitWithCharsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithCharsWorks();
            },
            splitWithStringsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithStringsWorks();
            },
            splitWithStringsAndLimitWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().splitWithStringsAndLimitWorks();
            },
            startsWithCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().startsWithCharWorks();
            },
            startsWithStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().startsWithStringWorks();
            },
            substrWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().substrWorks();
            },
            substringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().substringWorks();
            },
            jsSubstringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().jsSubstringWorks();
            },
            toLowerCaseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().toLowerCaseWorks();
            },
            toUpperCaseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().toUpperCaseWorks();
            },
            toLowerWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().toLowerWorks();
            },
            toUpperWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().toUpperWorks();
            },
            trimWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().trimWorks();
            },
            trimCharsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().trimCharsWorks();
            },
            trimStartCharsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().trimStartCharsWorks();
            },
            trimEndCharsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().trimEndCharsWorks();
            },
            trimStartWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().trimStartWorks();
            },
            trimEndWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().trimEndWorks();
            },
            stringEqualityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().stringEqualityWorks();
            },
            stringInequalityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().stringInequalityWorks();
            },
            stringIndexingWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().stringIndexingWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().getHashCodeWorks();
            },
            instanceEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().instanceEqualsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            stringEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().stringEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().iComparableCompareToWorks();
            },
            joinWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().joinWorks();
            },
            containsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().containsWorks();
            },
            toCharArrayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                t.getFixture().toCharArrayWorks();
            },
            strings: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests);
                Bridge.ClientTest.SimpleTypes.StringTests.strings();
            },
            enumerable: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.StringTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_StringTests, 5);
                Bridge.ClientTest.SimpleTypes.StringTests.enumerable();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion)],
        statics: {
            testConstructors: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion, 42);
                Bridge.ClientTest.SimpleTypes.TestVersion.testConstructors();
            },
            testCloneCompare: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion, 13);
                Bridge.ClientTest.SimpleTypes.TestVersion.testCloneCompare();
            },
            testEqualsGetHashCode: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion, 9);
                Bridge.ClientTest.SimpleTypes.TestVersion.testEqualsGetHashCode();
            },
            testToString: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion, 10);
                Bridge.ClientTest.SimpleTypes.TestVersion.testToString();
            },
            testParse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion, 6);
                Bridge.ClientTest.SimpleTypes.TestVersion.testParse();
            },
            testOperators: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TestVersion).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TestVersion, 30);
                Bridge.ClientTest.SimpleTypes.TestVersion.testOperators();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().defaultConstructorWorks();
            },
            defaultValueWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().defaultValueWorks();
            },
            zeroWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().zeroWorks();
            },
            creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().creatingInstanceReturnsTimeSpanWithZeroValue();
            },
            parameterConstructorsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().parameterConstructorsWorks();
            },
            factoryMethodsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().factoryMethodsWork();
            },
            propertiesWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().propertiesWork();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().compareToWorks();
            },
            compareWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().compareWorks();
            },
            staticEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().staticEqualsWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().iEquatableEqualsWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().toStringWorks();
            },
            addWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().addWorks();
            },
            subtractWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().subtractWorks();
            },
            durationWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().durationWorks();
            },
            negateWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().negateWorks();
            },
            comparisonOperatorsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().comparisonOperatorsWork();
            },
            additionOperatorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().additionOperatorWorks();
            },
            subtractionOperatorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().subtractionOperatorWorks();
            },
            unaryPlusWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().unaryPlusWorks();
            },
            unaryMinusWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TimeSpanTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TimeSpanTests);
                t.getFixture().unaryMinusWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests)],
        statics: {
            tuple1Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple1Works();
            },
            tuple2Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple2Works();
            },
            tuple3Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple3Works();
            },
            tuple4Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple4Works();
            },
            tuple5Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple5Works();
            },
            tuple6Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple6Works();
            },
            tuple7Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple7Works();
            },
            tuple8Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.TupleTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_TupleTests);
                t.getFixture().tuple8Works();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt16Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt16Tests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().typePropertiesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().castsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().iFormattableToStringWorks();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt32Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt32Tests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().typePropertiesAreCorrect();
            },
            minMaxValuesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().minMaxValuesAreCorrect();
            },
            castsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().castsWork();
            },
            overflowWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().overflowWorks();
            },
            combinedTypesOperationsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().combinedTypesOperationsWork();
            },
            defaultValueIs0: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().defaultValueIs0();
            },
            defaultConstructorReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().defaultConstructorReturnsZero();
            },
            creatingInstanceReturnsZero: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().creatingInstanceReturnsZero();
            },
            constantsWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().constantsWork();
            },
            formatWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().formatWorks();
            },
            iFormattableToStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().iFormattableToStringWorks();
            },
            castingOfLargeValuesToUInt64Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().castingOfLargeValuesToUInt64Works();
            },
            divisionOfLargeUInt64Works: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().divisionOfLargeUInt64Works();
            },
            tryParseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().tryParseWorks();
            },
            parseWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().parseWorks();
            },
            toStringWithoutRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().toStringWithoutRadixWorks();
            },
            toStringWithRadixWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().toStringWithRadixWorks();
            },
            getHashCodeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().getHashCodeWorks();
            },
            equalsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().equalsWorks();
            },
            iEquatableEqualsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().iEquatableEqualsWorks();
            },
            compareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().compareToWorks();
            },
            iComparableCompareToWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.SimpleTypes.UInt64Tests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_SimpleTypes_UInt64Tests);
                t.getFixture().iComparableCompareToWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            stringOnlyConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().stringOnlyConstructorWorks();
            },
            constructorWithFlagsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().constructorWithFlagsWorks();
            },
            globalFlagWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().globalFlagWorks();
            },
            ignoreCaseFlagWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().ignoreCaseFlagWorks();
            },
            multilineFlagWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().multilineFlagWorks();
            },
            patternPropertyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().patternPropertyWorks();
            },
            sourcePropertyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().sourcePropertyWorks();
            },
            execWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().execWorks();
            },
            lastIndexWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().lastIndexWorks();
            },
            testWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                t.getFixture().testWorks();
            },
            escapeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_JavaScript_BridgeRegexTests);
                Bridge.ClientTest.Text.RegularExpressions.JavaScript.BridgeRegexTests.escapeWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests)],
        statics: {
            startOfStringOrLineTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().startOfStringOrLineTest();
            },
            startOfStringOrLineMultilineModeTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().startOfStringOrLineMultilineModeTest();
            },
            endOfStringOrLineTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrLineTest1();
            },
            endOfStringOrLineTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrLineTest2();
            },
            endOfStringOrLineTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrLineTest3();
            },
            endOfStringOrLineTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrLineTest4();
            },
            startOfStringOnlyTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().startOfStringOnlyTest();
            },
            endOfStringOrNewlineTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrNewlineTest();
            },
            endOfStringOnlyTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOnlyTest();
            },
            contiguousMatchesTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().contiguousMatchesTest();
            },
            wordBoundaryTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().wordBoundaryTest();
            },
            nonWordBoundaryTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().nonWordBoundaryTest();
            },
            startAndEndOfStringCustomTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().startAndEndOfStringCustomTest1();
            },
            startAndEndOfStringCustomTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().startAndEndOfStringCustomTest2();
            },
            endOfStringOrNewlineCustomTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrNewlineCustomTest1();
            },
            endOfStringOrNewlineCustomTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOrNewlineCustomTest2();
            },
            endOfStringOnlyCustomTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOnlyCustomTest1();
            },
            endOfStringOnlyCustomTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOnlyCustomTest2();
            },
            endOfStringOnlyCustomTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().endOfStringOnlyCustomTest3();
            },
            contiguousMatchesCustomTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().contiguousMatchesCustomTest1();
            },
            contiguousMatchesCustomTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexAnchorsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexAnchorsTests);
                t.getFixture().contiguousMatchesCustomTest2();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests)],
        statics: {
            msdnNumberedBackrefTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().msdnNumberedBackrefTest();
            },
            msdnNamedBackrefTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().msdnNamedBackrefTest();
            },
            msdnNamedBackrefWithNumberAsNameTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().msdnNamedBackrefWithNumberAsNameTest();
            },
            msdnNamedBackrefWithRedefinedGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().msdnNamedBackrefWithRedefinedGroupTest();
            },
            msdnNamedBackrefWithEmptyCaptureTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().msdnNamedBackrefWithEmptyCaptureTest1();
            },
            msdnNamedBackrefWithEmptyCaptureTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().msdnNamedBackrefWithEmptyCaptureTest2();
            },
            namedBackrefToUnreachableGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().namedBackrefToUnreachableGroupTest();
            },
            namedBackrefToSelfGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().namedBackrefToSelfGroupTest();
            },
            namedBackrefToParentGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().namedBackrefToParentGroupTest();
            },
            numberedBackrefTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().numberedBackrefTest();
            },
            numberedBackrefInGroupFailsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().numberedBackrefInGroupFailsTest();
            },
            namedBackrefInGroupFailsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexBackreferenceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexBackreferenceTests);
                t.getFixture().namedBackrefInGroupFailsTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests)],
        statics: {
            escapeTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests);
                t.getFixture().escapeTest();
            },
            unescapeTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests);
                t.getFixture().unescapeTest();
            },
            escapeCharSetTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests, 0);
                t.getFixture().escapeCharSetTest();
            },
            nonEscapeCharSetTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests);
                t.getFixture().nonEscapeCharSetTest();
            },
            bracketEscapeTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests);
                t.getFixture().bracketEscapeTest();
            },
            bracketEscapeInGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests);
                t.getFixture().bracketEscapeInGroupTest();
            },
            bracketEscapeInCharGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexEscapeTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexEscapeTests);
                t.getFixture().bracketEscapeInCharGroupTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexIsMatchTests)],
        statics: {
            isMatchTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexIsMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests);
                t.getFixture().isMatchTest();
            },
            isMatchWithOffsetTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexIsMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests);
                t.getFixture().isMatchWithOffsetTest();
            },
            isMatchStaticTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexIsMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests);
                t.getFixture().isMatchStaticTest();
            },
            isMatchStaticWithOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexIsMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests);
                t.getFixture().isMatchStaticWithOptionsTest();
            },
            isMatchStaticWithOptionsAndTimeoutTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexIsMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexIsMatchTests);
                t.getFixture().isMatchStaticWithOptionsAndTimeoutTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchesTests)],
        statics: {
            matchesTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchesTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests);
                t.getFixture().matchesTest();
            },
            matchesAtPositionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchesTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests);
                t.getFixture().matchesAtPositionTest();
            },
            matchesStaticTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchesTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests);
                t.getFixture().matchesStaticTest();
            },
            matchesStaticWithOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchesTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests);
                t.getFixture().matchesStaticWithOptionsTest();
            },
            matchesStaticWithOptionsAndTimeoutTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchesTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchesTests);
                t.getFixture().matchesStaticWithOptionsAndTimeoutTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests)],
        statics: {
            matchTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests);
                t.getFixture().matchTest();
            },
            matchAtPositionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests);
                t.getFixture().matchAtPositionTest();
            },
            matchAtPositionAndLengthTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests);
                t.getFixture().matchAtPositionAndLengthTest();
            },
            matchStaticTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests);
                t.getFixture().matchStaticTest();
            },
            matchStaticWithOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests);
                t.getFixture().matchStaticWithOptionsTest();
            },
            matchStaticWithOptionsAndTimeoutTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexMatchTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexMatchTests);
                t.getFixture().matchStaticWithOptionsAndTimeoutTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests)],
        statics: {
            replaceTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceTest1();
            },
            replaceAtPositionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceAtPositionTest();
            },
            replaceAtPositionAndLengthTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceAtPositionAndLengthTest();
            },
            replaceWithEvaluatorTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceWithEvaluatorTest();
            },
            replaceWithEvaluatorAndCountTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceWithEvaluatorAndCountTest();
            },
            replaceWithEvaluatorAndCountAtPostitionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceWithEvaluatorAndCountAtPostitionTest();
            },
            replaceStaticTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticTest1();
            },
            replaceStaticTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticTest2();
            },
            replaceStaticWithOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticWithOptionsTest();
            },
            replaceStaticWithOptionsAndTimeoutTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticWithOptionsAndTimeoutTest();
            },
            replaceStaticWithEvaluatorTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticWithEvaluatorTest();
            },
            replaceStaticWithEvaluatorAndOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticWithEvaluatorAndOptionsTest();
            },
            replaceStaticWithEvaluatorAndOptionsAndTimoutTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexReplaceTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexReplaceTests);
                t.getFixture().replaceStaticWithEvaluatorAndOptionsAndTimoutTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests)],
        statics: {
            splitTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitTest1();
            },
            splitTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitTest2();
            },
            splitTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitTest3();
            },
            splitTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitTest4();
            },
            splitTest5: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitTest5();
            },
            splitWithCountTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountTest1();
            },
            splitWithCountTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountTest2();
            },
            splitWithCountTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountTest3();
            },
            splitWithCountTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountTest4();
            },
            splitWithCountAndStartAtTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountAndStartAtTest1();
            },
            splitWithCountAndStartAtTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountAndStartAtTest2();
            },
            splitWithCountAndStartAtTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountAndStartAtTest3();
            },
            splitWithCountAndStartAtTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitWithCountAndStartAtTest4();
            },
            splitStaticTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticTest1();
            },
            splitStaticTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticTest2();
            },
            splitStaticTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticTest3();
            },
            splitStaticTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticTest4();
            },
            splitStaticTest5: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticTest5();
            },
            splitStaticWithOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticWithOptionsTest();
            },
            splitStaticWithOptionsAndTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.Msdn.RegexSplitTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_Msdn_RegexSplitTests);
                t.getFixture().splitStaticWithOptionsAndTimeout();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexCaptureCollectionTests)],
        statics: {
            caseDataTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexCaptureCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests);
                t.getFixture().caseDataTest();
            },
            captureCollectionFieldsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexCaptureCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests);
                t.getFixture().captureCollectionFieldsTest();
            },
            captureCollectionForeachTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexCaptureCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests);
                t.getFixture().captureCollectionForeachTest();
            },
            captureCollectionEnumeratorTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexCaptureCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests);
                t.getFixture().captureCollectionEnumeratorTest();
            },
            captureCollectionCopyToTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexCaptureCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexCaptureCollectionTests);
                t.getFixture().captureCollectionCopyToTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests)],
        statics: {
            caseDataTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().caseDataTest();
            },
            getGroupNamesTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().getGroupNamesTest();
            },
            getGroupNumbersTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().getGroupNumbersTest();
            },
            groupNameFromNumberTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().groupNameFromNumberTest();
            },
            groupNumberFromNameTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().groupNumberFromNameTest();
            },
            supportedOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().supportedOptionsTest();
            },
            matchNamedGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().matchNamedGroupTest();
            },
            matchInnerNamedGroupTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().matchInnerNamedGroupTest1();
            },
            matchInnerNamedGroupTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().matchInnerNamedGroupTest2();
            },
            groupOrderingTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().groupOrderingTest();
            },
            repeatingGroupTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().repeatingGroupTest();
            },
            zeroResultTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().zeroResultTest();
            },
            nonCapturingGroupsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexEntityTests);
                t.getFixture().nonCapturingGroupsTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexGroupCollectionTests)],
        statics: {
            caseDataTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexGroupCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests);
                t.getFixture().caseDataTest();
            },
            groupCollectionFieldsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexGroupCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests);
                t.getFixture().groupCollectionFieldsTest();
            },
            groupCollectionForeachTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexGroupCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests);
                t.getFixture().groupCollectionForeachTest();
            },
            groupCollectionEnumeratorTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexGroupCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests);
                t.getFixture().groupCollectionEnumeratorTest();
            },
            groupCollectionCopyToTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexGroupCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexGroupCollectionTests);
                t.getFixture().groupCollectionCopyToTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests)],
        statics: {
            msdnMultilineInlineOptionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().msdnMultilineInlineOptionTest();
            },
            msdnSinglelineInlineOptionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().msdnSinglelineInlineOptionTest();
            },
            msdnIngoreWhitespaceInlineOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().msdnIngoreWhitespaceInlineOptionTest1();
            },
            msdnIngoreWhitespaceInlineOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().msdnIngoreWhitespaceInlineOptionTest2();
            },
            msdnIngoreWhitespaceInlineOptionTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().msdnIngoreWhitespaceInlineOptionTest3();
            },
            multilineInlineOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest1();
            },
            multilineInlineOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest2();
            },
            multilineInlineOptionTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest3();
            },
            multilineInlineOptionTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest4();
            },
            multilineInlineOptionTest5: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest5();
            },
            multilineInlineOptionTest6: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest6();
            },
            multilineInlineOptionTest7: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().multilineInlineOptionTest7();
            },
            singlelineInlineOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().singlelineInlineOptionTest1();
            },
            singlelineInlineOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().singlelineInlineOptionTest2();
            },
            singlelineInlineOptionTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().singlelineInlineOptionTest3();
            },
            ingoreWhitespaceInlineOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest1();
            },
            ingoreWhitespaceInlineOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest2();
            },
            ingoreWhitespaceInlineOptionTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest3();
            },
            ingoreWhitespaceInlineOptionTest4: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest4();
            },
            ingoreWhitespaceInlineOptionTest5: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest5();
            },
            ingoreWhitespaceInlineOptionTest6: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest6();
            },
            ingoreWhitespaceInlineOptionTest7: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest7();
            },
            ingoreWhitespaceInlineOptionTest8: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest8();
            },
            ingoreWhitespaceInlineOptionTest9: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().ingoreWhitespaceInlineOptionTest9();
            },
            inlineCommentTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexInlineOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexInlineOptionsTests);
                t.getFixture().inlineCommentTest1();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests)],
        statics: {
            caseDataTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().caseDataTest();
            },
            matchCollectionFieldsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().matchCollectionFieldsTest();
            },
            matchCollectionItemsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().matchCollectionItemsTest();
            },
            matchCollectionForeachTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().matchCollectionForeachTest();
            },
            matchCollectionEnumeratorTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().matchCollectionEnumeratorTest();
            },
            matchCollectionCopyToTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().matchCollectionCopyToTest();
            },
            matchCollectionWithEmptyPatternTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchCollectionTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchCollectionTests);
                t.getFixture().matchCollectionWithEmptyPatternTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests)],
        statics: {
            caseDataTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().caseDataTest();
            },
            matchEmptyPatternTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().matchEmptyPatternTest();
            },
            matchEmptyFieldsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().matchEmptyFieldsTest();
            },
            matchNextMatchTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().matchNextMatchTest();
            },
            matchNextMatchWithEmptyPatternTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().matchNextMatchWithEmptyPatternTest();
            },
            matchResultTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().matchResultTest();
            },
            matchSearchGroupByNameTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchEntityTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchEntityTests);
                t.getFixture().matchSearchGroupByNameTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchSparseTests)],
        statics: {
            groupOrderingTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchSparseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests);
                t.getFixture().groupOrderingTest1();
            },
            groupOrderingTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchSparseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests);
                t.getFixture().groupOrderingTest2();
            },
            groupOrderingTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchSparseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests);
                t.getFixture().groupOrderingTest3();
            },
            sparseOrderingTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchSparseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests);
                t.getFixture().sparseOrderingTest();
            },
            groupCapturesMergeTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexMatchSparseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexMatchSparseTests);
                t.getFixture().groupCapturesMergeTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests)],
        statics: {
            msdnIgnoreCaseOptionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().msdnIgnoreCaseOptionTest();
            },
            msdnMultilineOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().msdnMultilineOptionTest1();
            },
            msdnMultilineOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().msdnMultilineOptionTest2();
            },
            msdnSinglelineOptionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().msdnSinglelineOptionTest();
            },
            msdnIgnoreWhitespaceOptionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().msdnIgnoreWhitespaceOptionTest();
            },
            ignoreCaseOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().ignoreCaseOptionTest1();
            },
            ignoreCaseOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().ignoreCaseOptionTest2();
            },
            ignoreCaseOptionTest3: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().ignoreCaseOptionTest3();
            },
            defaultLineOptionsTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().defaultLineOptionsTest1();
            },
            defaultLineOptionsTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().defaultLineOptionsTest2();
            },
            multilineOptionTest1: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().multilineOptionTest1();
            },
            multilineOptionTest2: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().multilineOptionTest2();
            },
            singlelineOptionTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().singlelineOptionTest();
            },
            singlelineDotCharTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().singlelineDotCharTest();
            },
            multilineAndSinglelineOptionsTest: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexOptionsTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexOptionsTests);
                t.getFixture().multilineAndSinglelineOptionsTest();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests)],
        statics: {
            regexTimeoutValidationWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexTimeoutValidationWorks();
            },
            regexIsMatchWorksWithShortTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexIsMatchWorksWithShortTimeout();
            },
            regexIsMatchWorksWithLongTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexIsMatchWorksWithLongTimeout();
            },
            regexMatchWorksWithShortTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexMatchWorksWithShortTimeout();
            },
            regexMatchWorksWithLongTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexMatchWorksWithLongTimeout();
            },
            regexNextMatchWorksWithShortTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexNextMatchWorksWithShortTimeout();
            },
            regexNextMatchWorksWithLongTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexNextMatchWorksWithLongTimeout();
            },
            regexReplaceWorksWithShortTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexReplaceWorksWithShortTimeout();
            },
            regexReplaceWorksWithLongTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexReplaceWorksWithLongTimeout();
            },
            regexReplaceEvaluatorWorksWithShortTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexReplaceEvaluatorWorksWithShortTimeout();
            },
            regexReplaceEvaluatorWorksWithLongTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexReplaceEvaluatorWorksWithLongTimeout();
            },
            regexSplitWorksWithShortTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexSplitWorksWithShortTimeout();
            },
            regexSplitWorksWithLongTimeout: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.RegularExpressions.RegexTimeoutTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_RegularExpressions_RegexTimeoutTests);
                t.getFixture().regexSplitWorksWithLongTimeout();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests)],
        statics: {
            typePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().typePropertiesAreCorrect();
            },
            defaultConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().defaultConstructorWorks();
            },
            constructorWithCapacityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().constructorWithCapacityWorks();
            },
            initialTextConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().initialTextConstructorWorks();
            },
            initialTextConstructorWithCapacityWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().initialTextConstructorWithCapacityWorks();
            },
            substringConstructorWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().substringConstructorWorks();
            },
            appendBoolWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendBoolWorks();
            },
            appendCharWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendCharWorks();
            },
            appendIntWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendIntWorks();
            },
            appendDoubleWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendDoubleWorks();
            },
            appendObjectWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendObjectWorks();
            },
            appendStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendStringWorks();
            },
            appendLineWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendLineWorks();
            },
            appendLineStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().appendLineStringWorks();
            },
            clearWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().clearWorks();
            },
            toStringWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().toStringWorks();
            },
            lengthPropertyWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests);
                t.getFixture().lengthPropertyWorks();
            },
            stringBuilders: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Text.StringBuilderTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Text_StringBuilderTests, 21);
                Bridge.ClientTest.Text.StringBuilderTests.stringBuilders();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests)],
        statics: {
            asyncVoid: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests, 3);
                t.getFixture().asyncVoid();
            },
            asyncTask: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests, 7);
                t.getFixture().asyncTask();
            },
            asyncTaskBodyThrowsException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests, 8);
                t.getFixture().asyncTaskBodyThrowsException();
            },
            awaitTaskThatFaults: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests, 8);
                t.getFixture().awaitTaskThatFaults();
            },
            aggregateExceptionsAreUnwrappedWhenAwaitingTask: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests, 2);
                t.getFixture().aggregateExceptionsAreUnwrappedWhenAwaitingTask();
            },
            asyncTaskThatReturnsValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.AsyncTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_AsyncTests, 8);
                t.getFixture().asyncTaskThatReturnsValue();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests)],
        statics: {
            typePropertiesForCancellationTokenSourceAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().typePropertiesForCancellationTokenSourceAreCorrect();
            },
            typePropertiesForCancellationTokenAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().typePropertiesForCancellationTokenAreCorrect();
            },
            typePropertiesForCancellationTokenRegistrationAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().typePropertiesForCancellationTokenRegistrationAreCorrect();
            },
            cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe();
            },
            cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe();
            },
            cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled();
            },
            cancellationTokenNoneIsNotCancelledAndCannotBe: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancellationTokenNoneIsNotCancelledAndCannotBe();
            },
            creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().creatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
            },
            activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().activatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
            },
            canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().canBeCanceledIsTrueForTokenCreatedForCancellationTokenSource();
            },
            isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().isCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod();
            },
            throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().throwIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled();
            },
            cancelWithoutArgumentsWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancelWithoutArgumentsWorks();
            },
            cancelWorksWhenThrowOnFirstExceptionIsFalse: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancelWorksWhenThrowOnFirstExceptionIsFalse();
            },
            cancelWorksWhenThrowOnFirstExceptionIsTrue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().cancelWorksWhenThrowOnFirstExceptionIsTrue();
            },
            registerOnACancelledSourceWithoutContextInvokesTheCallback: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerOnACancelledSourceWithoutContextInvokesTheCallback();
            },
            registerWithArgumentOnACancelledSourceInvokesTheCallback: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerWithArgumentOnACancelledSourceInvokesTheCallback();
            },
            registerOnACancelledSourceWithoutContextRethrowsAThrownException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerOnACancelledSourceWithoutContextRethrowsAThrownException();
            },
            registerOnACancelledSourceWithContextRethrowsAThrownException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerOnACancelledSourceWithContextRethrowsAThrownException();
            },
            registerOverloadsWithUseSynchronizationContextWork: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerOverloadsWithUseSynchronizationContextWork();
            },
            registerOnCancellationTokenCreatedNonCancelledDoesNothing: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerOnCancellationTokenCreatedNonCancelledDoesNothing();
            },
            registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registerOnCancellationTokenCreatedCancelledInvokesTheActionImmediately();
            },
            duplicateCancelDoesNotCauseCallbacksToBeCalledTwice: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().duplicateCancelDoesNotCauseCallbacksToBeCalledTwice();
            },
            registrationsCanBeCompared: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registrationsCanBeCompared();
            },
            registrationsCanBeUnregistered: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().registrationsCanBeUnregistered();
            },
            creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().creatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm();
            },
            linkedSourceWithTwoTokensWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().linkedSourceWithTwoTokensWorks();
            },
            linkedSourceWithThreeTokensWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.CancellationTokenTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_CancellationTokenTests);
                t.getFixture().linkedSourceWithThreeTokensWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests)],
        statics: {
            taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests, 7);
                t.getFixture().taskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes();
            },
            taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests, 7);
                t.getFixture().taskFromPromiseWithResultFactoryWorksWhenPromiseCompletes();
            },
            taskFromPromiseWorksWhenPromiseFails: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests, 10);
                t.getFixture().taskFromPromiseWorksWhenPromiseFails();
            },
            completingPromiseCanBeAwaited: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests, 3);
                t.getFixture().completingPromiseCanBeAwaited();
            },
            failingPromiseCanBeAwaited: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests, 4);
                t.getFixture().failingPromiseCanBeAwaited();
            },
            taskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.PromiseTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_PromiseTests, 9);
                t.getFixture().taskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests)],
        statics: {
            taskCompletionSourceTypePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 2);
                t.getFixture().taskCompletionSourceTypePropertiesAreCorrect();
            },
            taskTypePropertiesAreCorrect: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 5);
                t.getFixture().taskTypePropertiesAreCorrect();
            },
            taskCompletionSourceWorksWhenSettingResult: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 10);
                t.getFixture().taskCompletionSourceWorksWhenSettingResult();
            },
            taskCompletionSourceWorksWhenSettingASingleException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 12);
                t.getFixture().taskCompletionSourceWorksWhenSettingASingleException();
            },
            taskCompletionSourceWorksWhenSettingTwoExceptions: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 14);
                t.getFixture().taskCompletionSourceWorksWhenSettingTwoExceptions();
            },
            taskCompletionSourceWorksWhenCancelling: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 10);
                t.getFixture().taskCompletionSourceWorksWhenCancelling();
            },
            cancelledTaskThrowsTaskCanceledExceptionWhenAwaited: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 2);
                t.getFixture().cancelledTaskThrowsTaskCanceledExceptionWhenAwaited();
            },
            cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 3);
                t.getFixture().cancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed();
            },
            setResultFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 1);
                t.getFixture().setResultFailsWhenTheTaskIsCompleted();
            },
            setCanceledFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 1);
                t.getFixture().setCanceledFailsWhenTheTaskIsCompleted();
            },
            setExceptionFailsWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 1);
                t.getFixture().setExceptionFailsWhenTheTaskIsCompleted();
            },
            completedTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 3);
                t.getFixture().completedTaskHasCorrectIsXProperties();
            },
            cancelledTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 3);
                t.getFixture().cancelledTaskHasCorrectIsXProperties();
            },
            faultedTaskHasCorrectIsXProperties: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 3);
                t.getFixture().faultedTaskHasCorrectIsXProperties();
            },
            trySetResultReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 2);
                t.getFixture().trySetResultReturnsFalseWhenTheTaskIsCompleted();
            },
            trySetCanceledReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 2);
                t.getFixture().trySetCanceledReturnsFalseWhenTheTaskIsCompleted();
            },
            trySetExceptionReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 2);
                t.getFixture().trySetExceptionReturnsFalseWhenTheTaskIsCompleted();
            },
            continueWithForNonGenericTaskWorkWithNoResultAndNoException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 10);
                t.getFixture().continueWithForNonGenericTaskWorkWithNoResultAndNoException();
            },
            continueWithWhenCallbackThrowsAnException: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 6);
                t.getFixture().continueWithWhenCallbackThrowsAnException();
            },
            exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 8);
                t.getFixture().exceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask();
            },
            continueWithForNonGenericTaskCanReturnAValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 11);
                t.getFixture().continueWithForNonGenericTaskCanReturnAValue();
            },
            continueWithWithNoReturnValueForGenericTaskWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 10);
                t.getFixture().continueWithWithNoReturnValueForGenericTaskWorks();
            },
            continueWithForGenericTaskCanReturnAValue: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 11);
                t.getFixture().continueWithForGenericTaskCanReturnAValue();
            },
            delayWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 6);
                t.getFixture().delayWorks();
            },
            fromResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 3);
                t.getFixture().fromResultWorks();
            },
            runWithoutResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 6);
                t.getFixture().runWithoutResultWorks();
            },
            runWithResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 7);
                t.getFixture().runWithResultWorks();
            },
            runWorksWhenBodyThrows: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 7);
                t.getFixture().runWorksWhenBodyThrows();
            },
            whenAllParamArrayWithResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 13);
                t.getFixture().whenAllParamArrayWithResultWorks();
            },
            whenAllEnumerableWithResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 13);
                t.getFixture().whenAllEnumerableWithResultWorks();
            },
            whenAllParamArrayWithoutResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 12);
                t.getFixture().whenAllParamArrayWithoutResultWorks();
            },
            whenAllEnumerableWithoutResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 12);
                t.getFixture().whenAllEnumerableWithoutResultWorks();
            },
            whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 17);
                t.getFixture().whenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted();
            },
            whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 12);
                t.getFixture().whenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled();
            },
            whenAnyParamArrayWithResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 10);
                t.getFixture().whenAnyParamArrayWithResultWorks();
            },
            whenAnyEnumerableWithResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 10);
                t.getFixture().whenAnyEnumerableWithResultWorks();
            },
            whenAnyParamArrayWithoutResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 9);
                t.getFixture().whenAnyParamArrayWithoutResultWorks();
            },
            whenAnyEnumerableWithoutResultWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 9);
                t.getFixture().whenAnyEnumerableWithoutResultWorks();
            },
            whenAnyFaultsIfTheFirstTaskFaulted: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 9);
                t.getFixture().whenAnyFaultsIfTheFirstTaskFaulted();
            },
            whenAnyIsCancelledIfTheFirstTaskWasCancelled: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 8);
                t.getFixture().whenAnyIsCancelledIfTheFirstTaskWasCancelled();
            },
            constructorWithOnlyActionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 7);
                t.getFixture().constructorWithOnlyActionWorks();
            },
            constructorWithActionAndStateWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 8);
                t.getFixture().constructorWithActionAndStateWorks();
            },
            exceptionInManuallyCreatedTaskIsStoredOnTheTask: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 8);
                t.getFixture().exceptionInManuallyCreatedTaskIsStoredOnTheTask();
            },
            constructorWithOnlyFunctionWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 8);
                t.getFixture().constructorWithOnlyFunctionWorks();
            },
            constructorWithFunctionAndStateWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TaskTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TaskTests, 9);
                t.getFixture().constructorWithFunctionAndStateWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests)],
        statics: {
            testTimerThrows: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests);
                t.getFixture().testTimerThrows();
            },
            testStaticCallbackWithDispose: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests);
                Bridge.ClientTest.Threading.TimerTests.testStaticCallbackWithDispose();
            },
            testStaticCallbackWithChange: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests);
                t.getFixture().testStaticCallbackWithChange();
            },
            testInstanceCallbackWithDispose: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests);
                Bridge.ClientTest.Threading.TimerTests.testInstanceCallbackWithDispose();
            },
            testInstanceCallbackWithChange: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests);
                t.getFixture().testInstanceCallbackWithChange();
            },
            testInfiniteTimer: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.Threading.TimerTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_Threading_TimerTests);
                t.getFixture().testInfiniteTimer();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TypeSystemTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.TypeSystemTests)],
        statics: {
            gettingBaseTypeWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.TypeSystemTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TypeSystemTests);
                t.getFixture().gettingBaseTypeWorks();
            },
            isAssignableFromWorks: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.TypeSystemTests).beforeTest(true, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_TypeSystemTests);
                t.getFixture().isAssignableFromWorks();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedInsideCheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedInsideCheckedTests.testULong();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_UncheckedTests);
                Bridge.ClientTest.CheckedUncheckedTests.UncheckedTests.testULong();
            }
        }
    });
    
    Bridge.define('Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests', {
        inherits: [Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests)],
        statics: {
            testInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testInt32();
            },
            testUInt32: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testUInt32();
            },
            testLong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testLong();
            },
            testULong: function (assert) {
                var t = Bridge.Test.QUnit.TestFixture$1(Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests).beforeTest(false, assert, Bridge.Test.QUnit.TestRunner.Bridge_ClientTest_WithNoUncheckedKeywordTests);
                Bridge.ClientTest.CheckedUncheckedTests.WithNoUncheckedKeywordTests.testULong();
            }
        }
    });
    
    Bridge.init();
})(this);
